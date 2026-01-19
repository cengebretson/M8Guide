var pages = [
{ sections : [
	{name:"Navigation",actions:[
		{name:"Move Cursor",description:"UP or DOWN or LEFT or RIGHT", command:"up down left right", page:7},
		{name:"Screen Navigation",description:"hold SHIFT + [ UP or DOWN or LEFT or RIGHT ]", command:"shifthold up down left right", page:7}]},
	{name:"Editing",actions:[
		{name:"Change Value",secondary:"fine",description:"hold EDIT + [ LEFT or RIGHT ]", command:"edithold left right", page:7},
		{name:"Change Value",secondary:"coarse",description:"hold EDIT + [ UP or DOWN ]", command:"edithold up down", page:7},
		{name:"Cut Value",secondary:"or set to default",description:"EDIT + OPTION", command:"edit option", page:7},
		{name:"YES",secondary:"in dialog",description:"EDIT", command:"edit", page:7},
		{name:"NO",secondary:"(or exit) in dialog",description:"OPTION", command:"option", page:7}]},
	{name:"Play",actions:[
		{name:"Play All Tracks",secondary:"from song cursor",description:"hold SHIFT + PLAY", command:"shifthold play" ,page:7},
		{name:"Mute Current Track",description:"hold OPTION + SHIFT",extra:"(latch mute by releasing OPTION first)", command:"optionhold shift", page:11},
		{name:"Solo Current Track",description:"hold OPTION + PLAY",extra:"(latch solo by releasing OPTION first)", command:"optionhold play", page:11},
		{name:"Clear All Mute",secondary:" and solos",description:"hold OPTION + hold SHIFT + PLAY", command:"optionhold shifthold play", page:11}]}

	]},{sections: [
	{name:"Mixer Screen", actions:[
		{name:"Create Snapshot",description:"hold SHIFT + OPTION", command:"shifthold option"},
		{name:"Recall Snapshot",description:"hold SHIFT + EDIT", command:"shifthold edit"}]},
	{name:"Global", actions:[
		{name:"Cycle Themes",description:"hold SHIFT + OPTION then tap UP", command:"shifthold option1st up2nd"},
		{name:"Toggle Display Mode",secondary:"Oscilloscope",description:"hold SHIFT + OPTION then tap DOWN", command:"shifthold option1st down2nd"}]},
	{name:"File Browser",actions:[
		{name:"Preview Sample",description:"PLAY", command:"play"},
		{name:"Sort Directory",description:"SHIFT + OPTION", command:"shift option", page:9},
		{name:"Delete Selected File",description:"EDIT + OPTION", command:"edit option", page:9}]}
	]},{sections: [
	{name:"Phrase Screen",actions:[
		{name:"Create",secondary:"new instrument",description:"on instrument column, EDIT (double-tap)", command:"edit double", page: 15},
		{name:"Clone and Paste",secondary:"instrument",description:"hold SHIFT + OPTION then EDIT", command:"shifthold option1st edit2nd", page: 15},
		{name:"Jump to Track",secondary:"left or right",description:"hold OPTION + [ LEFT or RIGHT ] ", command:"optionhold left right", page: 15},
		{name:"Jump to Phrase",secondary:"previous or next",description:"hold OPTION + [ UP or DOWN ] ", command:"optionhold up down", page: 15},
		{name:"Interpolate",description:"in selection mode (single column), hold SHIFT + EDIT", command:"shifthold edit", page: 15},
		{name:"Move",secondary:"selection",description:"in selection mode (multi column), hold EDIT + [ UP or DOWN]", command:"edithold up down", page: 15},

		{name:"Note Fill",secondary:"",description:"in selection mode (note column), hold OPTION + LEFT", command:"optionhold left", page: 15},
		{name:"Random Fill",description:"in selection mode (note column), hold OPTION + RIGHT", extra: "velocity can be randomized if selected", command:"optionhold right", page: 15},
		{name:"Randomize Notes",secondary:"Up or Down",description:"in selection mode (note column), hold OPTION + [UP or DOWN]", command:"optionhold up down", page: 15}]},
	{name:"Selection",actions:[
		{name:"Enter Selection Mode",description:"hold SHIFT + OPTION",extra:"(tap OPTION to cycle through modes)", command:"shifthold option" ,page:7},
		{name:"Copy Selection",secondary:"(exit mode)",description:"OPTION", command:"option" ,page:7},
		{name:"Paste Copy Buffer",description:"hold SHIFT + EDIT", command:"shifthold edit" ,page:7}
		]}

		
		]},{sections: [
	{name:"Instrument Screen",actions:[
		{name:"Preview Instrument",description:"PLAY", command:"play"},
		{name:"Copy Instrument",description:"hold SHIFT + OPTION", command:"shifthold option"},
		{name:"Jump to Instrument",secondary:"previous or next",description:"OPTION + [ LEFT or RIGHT ] ", command:"optionhold left right"},
		{name:"Edit Parameter",description:"EDIT + [ Touchscreen LEFT and RIGHT ]", command:"edithold"},
		{name:"Map Parameter",description:"OPTION + [ Touchscreen LEFT and RIGHT or UP and DOWN ]", command:"optionhold"}]},
	{name:"Table Screen",actions:[
		{name:"Interpolate Values",description:"while in selection mode, hold SHIFT + EDIT", command:"shifthold edit", page: 21},
		{name:"Jump to Table",secondary:"previous or next",description:"OPTION + [ LEFT or RIGHT ] ", command:"option left right", page: 21}]},
	{name:"Song Screen",actions:[
		{name:"Cue Row",secondary:"while playing",description:"hold LEFT + PLAY", command:"lefthold play", page:11},
		{name:"Create",secondary:"new chain",description:"double-tap EDIT", command:"edit double", page: 11},
		{name:"Clone and Paste",secondary:"chain alone",description:"hold SHIFT + OPTION then EDIT", command:"shifthold option1st edit2nd", page: 11},
		{name:"Clone and Paste",secondary:"chain & phrases",description:"hold SHIFT + OPTION then double-tap EDIT", command:"shifthold option1st edit2nd double", page: 11},
		{name:"Solo Tracks",secondary:"left or right",description:"hold OPTION + [ LEFT or RIGHT ] ", command:"optionhold left right", page:11},
		{name:"Solo Row",secondary:"Live Mode",description:"hold OPTION + PLAY", command:"optionhold play"},
		{name:"Jump 16 Rows",secondary:"up or down",description:"hold OPTION + [ UP or DOWN ] ", command:"optionhold up down", page:11},

		{name:"Move Selection", description:"in selection mode, hold EDIT + [ UP or DOWN ]",command:"edithold up down", page: 11},
		{name:"Render Selection", description:"in selection mode, double-tap EDIT", command:"edit double", page: 11}]},
	{name:"Chain Screen",actions:[
		{name:"Create",secondary:"new phrase",description:"double-tap EDIT", command:"edit double"},
		{name:"Clone and Paste",secondary:"phrase",description:"hold SHIFT + OPTION then EDIT", command:"shifthold option1st edit2nd", page: 13},
		{name:"Jump to Track",secondary:"left or right",description:"hold OPTION + [ LEFT or RIGHT ] ", command:"optionhold left right", page: 13},
		{name:"Jump to Chain",secondary:"previous or next",description:"hold OPTION + [ UP or DOWN ]", command:"optionhold up down", page: 13}]},
	{name:"Scale Screen",actions:[
		{name:"Change Scale",description:"EDIT + [ LEFT or RIGHT ]", command:"edithold left right"},
		{name:"Change Root",description:"OPTION + [ UP or DOWN ]", command:"optionhold up down"}]}

		
	]}]
	
$( document ).ready(function() {
		
	$.each(pages, function(_, page) {
		$.each(page.sections, function(_, section) {
			render_section(section).appendTo("#content");
		});
	});

	$(".to_hide").remove();
});

function render_section(section)
{
	var section_container = $("<div class='section_container'>");
	section_container.append("<div class='section_header'>" + section.name + "</div>");

	$.each(section.actions, function(_index, action)
	{
		var cloned = $("#template").clone();
		$(cloned).removeAttr('id');
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

