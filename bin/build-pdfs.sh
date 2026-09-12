#!/usr/bin/env bash
#
# Render each guide to PDF with headless Chrome.
#
# Usage: bin/build-pdfs.sh [output-dir]
#   output-dir  where PDFs are written (defaults to the repository root)
#
# Set CHROME to override the browser binary.

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
out_dir="${1:-$repo_root}"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
guides=(shortcuts efx tips macrosynth fm sampler hypersynth-wavsynth)

if [[ ! -x "$chrome" ]]; then
    echo "Chrome not found at: $chrome (set CHROME to override)" >&2
    exit 1
fi

mkdir -p "$out_dir"
profile_dir="$(mktemp -d)"
trap 'rm -rf "$profile_dir"' EXIT

file_size() {
    if [[ -f "$1" ]]; then stat -f %z "$1"; else echo 0; fi
}

for guide in "${guides[@]}"; do
    pdf="$out_dir/$guide.pdf"
    echo "Rendering $guide.pdf"
    rm -f "$pdf"

    # --use-mock-keychain keeps macOS from blocking on a keychain prompt
    "$chrome" --headless --disable-gpu --no-first-run \
        --use-mock-keychain --password-store=basic \
        --user-data-dir="$profile_dir" \
        --no-pdf-header-footer \
        --print-to-pdf="$pdf" \
        "file://$repo_root/$guide.html" >/dev/null 2>&1 &
    chrome_pid=$!

    # Headless Chrome on macOS can linger after writing the PDF, so wait for
    # the file size to settle (or Chrome to exit), then stop it.
    last_size=-1
    for _ in $(seq 60); do
        sleep 0.5
        size="$(file_size "$pdf")"
        if [[ "$size" -gt 0 && "$size" -eq "$last_size" ]]; then
            break
        fi
        kill -0 "$chrome_pid" 2>/dev/null || break
        last_size="$size"
    done
    kill "$chrome_pid" 2>/dev/null || true
    wait "$chrome_pid" 2>/dev/null || true

    if [[ "$(file_size "$pdf")" -eq 0 ]]; then
        echo "Failed to render $guide.pdf" >&2
        exit 1
    fi

    # Each guide is a single page; more means content overflowed
    pages="$(perl -0777 -ne 'my $n = () = m{/Type\s*/Page(?!s)}g; print $n' "$pdf")"
    if [[ "$pages" -ne 1 ]]; then
        echo "Warning: $guide.pdf has $pages pages; content does not fit on one page" >&2
        status=1
    fi
done

exit "${status:-0}"
