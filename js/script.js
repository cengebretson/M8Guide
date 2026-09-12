const COLUMN_COUNT = 3;
const SVG_NS = "http://www.w3.org/2000/svg";

// Material-style 24x24 icon paths for section headers (data.js "icon")
const ICONS = {
  navigation:
    "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z",
  play: "M8 5v14l11-7z",
  folder:
    "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z",
  mixer:
    "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z",
  copy: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",
  song: "M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z",
  chain:
    "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
  instrument:
    "M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z",
  phrase:
    "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
  pool: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z",
  sample:
    "M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z",
};

// Button names shown in upright bold inside descriptions
const BUTTON_NAMES = /\b(EDIT|OPTION|SHIFT|PLAY|UP|DOWN|LEFT|RIGHT)\b/;

document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const template = document.getElementById("action-template");

  const columns = [];
  for (let i = 0; i < COLUMN_COUNT; i++) {
    columns.push(content.appendChild(createElement("div", "column")));
  }

  data.forEach(function (section) {
    const column = columns[section.column - 1];
    if (!column) {
      throw new Error(
        `Section "${section.section}" has invalid column: ${section.column}`,
      );
    }
    column.appendChild(renderSection(section, template));
  });
});

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function createIcon(path) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "header-icon");
  svg.setAttribute("viewBox", "0 0 24 24");
  const pathElement = document.createElementNS(SVG_NS, "path");
  pathElement.setAttribute("d", path);
  svg.appendChild(pathElement);
  return svg;
}

// Fill an element with combo text: button names get their own span, and
// non-breaking spaces around "+" keep a combo from wrapping mid-combo
function setComboText(element, text) {
  const parts = text.replace(/ \+ /g, "\u00a0+\u00a0").split(BUTTON_NAMES);
  parts.forEach(function (part, index) {
    if (index % 2 === 1) {
      element.appendChild(createElement("span", "btn", part));
    } else if (part) {
      element.appendChild(document.createTextNode(part));
    }
  });
}

function renderSection(section, template) {
  const container = createElement("div", "section_container");
  if (section.legend) {
    container.classList.add("legend-section");
  }
  const header = createElement("div", "section_header", section.section);
  if (section.color) {
    header.classList.add("h-" + section.color);
  }
  if (section.icon) {
    header.prepend(createIcon(ICONS[section.icon]));
  }
  container.appendChild(header);

  section.actions.forEach(function (action) {
    const actionElement = template.content.firstElementChild.cloneNode(true);
    actionElement.querySelector(".name").textContent = action.name;
    actionElement.querySelector(".secondary").textContent = action.secondary ?? "";
    setComboText(actionElement.querySelector(".description"), action.description);
    setComboText(actionElement.querySelector(".extra"), action.extra ?? "");
    if (action.selection) {
      actionElement.classList.add("selection-mode");
    }

    const buttons = action.command.split(/\s+/).filter(Boolean);
    actionElement.querySelector(".buttons").classList.add(...buttons);
    container.appendChild(actionElement);
  });
  return container;
}
