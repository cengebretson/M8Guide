$(document).ready(function () {
  $.each(data, function (_, section) {
    render_section(section).appendTo("#content");
  });

  $(".to_hide").remove();
});

function render_section(section) {
  var section_container = $("<div class='section_container'>");
  section_container.append(
    "<div class='section_header'>" + section.section + "</div>",
  );

  $.each(section.actions, function (_index, action) {
    var cloned = $("#template").clone();
    $(cloned).removeAttr("id");
    $(".name", cloned).text(action.name);
    $(".secondary", cloned).text(action.secondary);
    $(".description", cloned).text(action.description);
    $(".extra", cloned).text(action.extra);

    $(".buttons", cloned).removeClass().addClass("buttons");
    $(".buttons", cloned).addClass("buttons " + action.command);
    section_container.append(cloned);
  });
  return section_container;
}
