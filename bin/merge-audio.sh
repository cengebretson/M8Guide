#!/usr/bin/env bash
#
# Merge "<name>-L.wav" / "<name>-R.wav" mono pairs into "<name>.wav" stereo
# files (44.1kHz, 16-bit PCM) for the M8.
#
# Usage: bin/merge-audio.sh [--delete] [--force] [directory]
#   --delete   remove the mono L/R sources after a successful merge
#   --force    overwrite an existing "<name>.wav" (skipped by default)
#   directory  search root, searched recursively (defaults to the current directory)
#
# Requires ffmpeg and ffprobe. If L and R differ in length, the shorter side
# is padded with silence so nothing is cut off. Exits 1 if any merge failed.

set -euo pipefail

usage() {
    cat <<'EOF'
Usage: bin/merge-audio.sh [--delete] [--force] [directory]
  --delete   remove the mono L/R sources after a successful merge
  --force    overwrite an existing "<name>.wav" (skipped by default)
  directory  search root, searched recursively (defaults to the current directory)
EOF
}

delete_sources=false
overwrite=false
base_dir=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --delete) delete_sources=true ;;
        --force) overwrite=true ;;
        -h | --help)
            usage
            exit 0
            ;;
        -*)
            echo "Unknown option: $1" >&2
            usage >&2
            exit 2
            ;;
        *)
            if [[ -n "$base_dir" ]]; then
                echo "Only one directory may be given" >&2
                usage >&2
                exit 2
            fi
            base_dir="$1"
            ;;
    esac
    shift
done
base_dir="${base_dir:-.}"

for tool in ffmpeg ffprobe; do
    if ! command -v "$tool" >/dev/null; then
        echo "$tool not found; install ffmpeg first" >&2
        exit 1
    fi
done

if [[ ! -d "$base_dir" ]]; then
    echo "Not a directory: $base_dir" >&2
    exit 1
fi

duration() {
    ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$1"
}

# Collect pairs before merging so new output files are never picked up
left_files=()
while IFS= read -r -d '' file; do
    left_files+=("$file")
done < <(find "$base_dir" -type f -iname "*-l.wav" -print0)

merged=0
skipped=0
failed=0

for left_file in ${left_files[@]+"${left_files[@]}"}; do
    name="$(basename "$left_file")"
    suffix="${left_file: -6}" # "-L.wav", matched case-insensitively
    base_with_spaces="${left_file:0:${#left_file}-6}"
    channel="${suffix:1:1}"
    extension="${suffix:2}"
    if [[ "$channel" == "L" ]]; then right_channel="R"; else right_channel="r"; fi
    right_file="${base_with_spaces}-${right_channel}${extension}"

    # Strip trailing spaces from the base name for the output file
    clean_base="${base_with_spaces%"${base_with_spaces##*[! ]}"}"
    output_file="${clean_base}${extension}"

    if [[ ! -f "$right_file" ]]; then
        echo "Skipping $name: missing R channel"
        skipped=$((skipped + 1))
        continue
    fi

    if [[ -e "$output_file" && "$overwrite" != true ]]; then
        echo "Skipping $name: $(basename "$output_file") already exists (use --force)"
        skipped=$((skipped + 1))
        continue
    fi

    # An unreadable file counts as a failed merge instead of stopping the batch
    if ! left_duration="$(duration "$left_file" 2>/dev/null)" ||
        ! right_duration="$(duration "$right_file" 2>/dev/null)" ||
        [[ ! "$left_duration" =~ ^[0-9.]+$ || ! "$right_duration" =~ ^[0-9.]+$ ]]; then
        echo "Failed: $name (could not read audio)" >&2
        failed=$((failed + 1))
        continue
    fi
    longest="$(awk -v a="$left_duration" -v b="$right_duration" 'BEGIN { print (a > b ? a : b) }')"
    note=""
    if awk -v a="$left_duration" -v b="$right_duration" 'BEGIN { d = a - b; exit !(d > 0.001 || d < -0.001) }'; then
        note=" (padded shorter channel to ${longest}s)"
    fi

    # Resample and downmix each side to mono, pad both to the longest length,
    # then join them as left/right. Write to a partial file so a failed run
    # never leaves a truncated output behind.
    partial_file="${output_file}.partial"
    per_input="aresample=44100,aformat=channel_layouts=mono,apad=whole_dur=${longest}"
    echo "Merging $name -> $(basename "$output_file")$note"
    if ffmpeg -nostdin -y -loglevel error \
        -i "$left_file" -i "$right_file" \
        -filter_complex "[0:a]${per_input}[l];[1:a]${per_input}[r];[l][r]amerge=inputs=2,atrim=end=${longest}[a]" \
        -map "[a]" -ac 2 -ar 44100 -c:a pcm_s16le -f wav \
        "$partial_file" && mv -f "$partial_file" "$output_file"; then
        merged=$((merged + 1))
        if [[ "$delete_sources" == true ]]; then
            rm "$left_file" "$right_file"
        fi
    else
        echo "Failed: $name" >&2
        rm -f "$partial_file"
        failed=$((failed + 1))
    fi
done

echo "Merged $merged, skipped $skipped, failed $failed"
if [[ "$failed" -gt 0 ]]; then
    exit 1
fi
