// Tag each section with its row count so css/common.css can hand leftover
// column height to rows evenly. Loaded after script.js, so this listener runs
// after the shortcuts guide has rendered its sections.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".section_container").forEach(function (section) {
    const rows = section.querySelectorAll(".action, tr, .tip").length;
    section.style.setProperty("--rows", Math.max(rows, 1));
  });

  const page = document.querySelector(".page");
  if (!page) return;
  const sheet = document.createElement("div");
  sheet.className = "sheet";
  page.before(sheet);
  sheet.append(page);

  function fitPage() {
    // Always measure at the authored size; repeated printing must not compound scaling.
    page.style.removeProperty("--page-scale");
    page.style.removeProperty("--canvas-height");
    const available = page.getBoundingClientRect();

    page.classList.add("measuring");
    const contentHeight = Math.max(
      ...Array.from(page.querySelectorAll(".column"), function (column) {
        return column.getBoundingClientRect().height;
      }),
      available.height
    );
    page.classList.remove("measuring");

    // A little headroom absorbs fractional pixel rounding at the paper edge.
    const canvasHeight = Math.ceil(contentHeight) + 2;
    page.style.setProperty("--canvas-height", canvasHeight + "px");
    const scale = Math.min(
      1,
      available.height / canvasHeight,
      available.width / Math.max(page.scrollWidth, available.width)
    );
    page.style.setProperty("--page-scale", scale);
  }

  fitPage();
  document.fonts.ready.then(fitPage);
  window.addEventListener("beforeprint", fitPage);
});
