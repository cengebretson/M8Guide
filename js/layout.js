// Tag each section with its row count so css/common.css can hand leftover
// column height to rows evenly. Loaded after script.js, so this listener runs
// after the shortcuts guide has rendered its sections.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".section_container").forEach(function (section) {
    const rows = section.querySelectorAll(".action, tr").length;
    section.style.setProperty("--rows", Math.max(rows, 1));
  });
});
