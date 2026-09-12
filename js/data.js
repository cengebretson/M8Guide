// Shortcut sections, rendered by script.js in order within each column.
//
// section fields: column (1-3), section (title), color (header color class
//                 suffix, see css/common.css), icon (key of ICONS in script.js),
//                 legend (optional), actions
// action fields:  name (Title Case), secondary (optional, lowercase),
//                 description (context first, then the combo),
//                 extra (optional, in parentheses),
//                 command (button icon classes, see README), selection (optional)
const data = [
  // Column 1
  {
    column: 1,
    section: "Navigation & Editing",
    color: "gray",
    icon: "navigation",
    actions: [
      {
        name: "Screen Navigation",
        description: "hold SHIFT + UP/DOWN/LEFT/RIGHT",
        command: "shifthold up down left right",
      },
      {
        name: "Change Value",
        secondary: "fine",
        description: "hold EDIT + LEFT/RIGHT",
        command: "edithold left right",
      },
      {
        name: "Change Value",
        secondary: "coarse",
        description: "hold EDIT + UP/DOWN",
        command: "edithold up down",
      },
      {
        name: "Cut Value",
        secondary: "or set to default",
        description: "EDIT + OPTION",
        command: "edit option",
      },
    ],
  },
  {
    column: 1,
    section: "Play",
    color: "gray",
    icon: "play",
    actions: [
      {
        name: "Play All Tracks",
        secondary: "from song cursor",
        description: "hold SHIFT + PLAY",
        command: "shifthold play",
      },
      {
        name: "Stop Track",
        secondary: "in live mode",
        description: "hold SHIFT + PLAY",
        command: "shifthold play",
      },
      {
        name: "Mute Current Track",
        description: "hold OPTION + SHIFT",
        extra: "(latch the mute by releasing OPTION first)",
        command: "optionhold shift",
      },
      {
        name: "Solo Current Track",
        description: "hold OPTION + PLAY",
        extra: "(latch the solo by releasing OPTION first)",
        command: "optionhold play",
      },
      {
        name: "Clear All Mutes",
        secondary: "and solos",
        description: "hold OPTION + SHIFT + PLAY",
        command: "optionhold shifthold play",
      },
    ],
  },
  {
    column: 1,
    section: "File Browser",
    color: "gray",
    icon: "folder",
    actions: [
      {
        name: "Preview Sample",
        description: "PLAY",
        command: "play",
      },
      {
        name: "Skip 8 Entries",
        secondary: "up or down",
        description: "hold OPTION + UP/DOWN",
        command: "optionhold up down",
      },
      {
        name: "Sort Directory",
        description: "SHIFT + OPTION",
        command: "shift option",
      },
      {
        name: "Delete Selected File",
        description: "EDIT + OPTION",
        command: "edit option",
      },
    ],
  },
  {
    column: 1,
    section: "Mixer Screen",
    color: "gray",
    icon: "mixer",
    actions: [
      {
        name: "Create Snapshot",
        description: "hold SHIFT + OPTION",
        command: "shifthold option",
      },
      {
        name: "Recall Snapshot",
        description: "hold SHIFT + EDIT",
        command: "shifthold edit",
      },
      {
        name: "Capture FX Command",
        description: "on a parameter, tap EDIT",
        extra: "(then tap EDIT in a phrase or table FX column to insert it)",
        command: "edit",
      },
    ],
  },
  {
    column: 1,
    section: "Legend",
    legend: true,
    actions: [
      {
        name: "Hold",
        description: "arrow means keep holding (SHIFT shown)",
        command: "shifthold",
      },
      {
        name: "In Order",
        description: "1 then 2 (OPTION, then EDIT)",
        command: "option1st edit2nd",
      },
      {
        name: "Double-tap",
        description: "stacked button (EDIT shown)",
        command: "edit double",
      },
      {
        name: "Selection Mode",
        description: "shaded rows need a selection",
        command: "",
        selection: true,
      },
    ],
  },

  // Column 2
  {
    column: 2,
    section: "Copy / Paste / Clone",
    color: "gray",
    icon: "copy",
    actions: [
      {
        name: "Enter Selection Mode",
        description: "hold SHIFT + OPTION",
        extra: "(tap OPTION to cycle modes; copies the instrument in Inst Screen or Pool)",
        command: "shifthold option",
      },
      {
        name: "Copy Selection",
        secondary: "and exit",
        description: "OPTION",
        command: "option",
      },
      {
        name: "Paste Copy Buffer",
        description: "hold SHIFT + EDIT",
        command: "shifthold edit",
      },
      {
        name: "Clone and Paste",
        description: "hold SHIFT + OPTION then EDIT",
        command: "shifthold option1st edit2nd",
      },
      {
        name: "Deep Clone",
        description: "hold SHIFT + OPTION then double-tap EDIT",
        extra: "(Song Screen: tap EDIT again to also clone instruments)",
        command: "shifthold option1st edit2nd double",
      },
    ],
  },
  {
    column: 2,
    section: "Song Screen",
    color: "orange",
    icon: "song",
    actions: [
      {
        name: "Cue Row",
        secondary: "while playing",
        description: "hold LEFT + PLAY",
        command: "lefthold play",
      },
      {
        name: "Insert Row",
        description: "on the row below, hold SHIFT + EDIT",
        extra: "(copy a row first: hold SHIFT + OPTION, tap OPTION, then OPTION)",
        command: "shifthold edit",
      },
      {
        name: "Create",
        secondary: "new chain",
        description: "double-tap EDIT",
        command: "edit double",
      },
      {
        name: "Toggle Live Mode",
        description: "hold SHIFT + LEFT",
        command: "shifthold left",
      },
      {
        name: "Show Track Time",
        secondary: "while stopped",
        description: "hold OPTION",
        command: "optionhold",
      },
      {
        name: "Solo Tracks",
        secondary: "left or right",
        description: "hold OPTION + LEFT/RIGHT",
        command: "optionhold left right",
      },
      {
        name: "Jump 16 Rows",
        secondary: "up or down",
        description: "hold OPTION + UP/DOWN",
        command: "optionhold up down",
      },
      {
        name: "Move Selection",
        description: "hold EDIT + UP/DOWN",
        command: "edithold up down",
        selection: true,
      },
      {
        name: "Render Selection",
        description: "double-tap EDIT",
        command: "edit double",
        selection: true,
      },
      {
        name: "Bookmark",
        secondary: "mark a chain",
        description: "triple-tap OPTION",
        command: "option",
      },
      {
        name: "Select Row",
        description: "on track 1, tap LEFT twice",
        extra: "(PLAY cues it; hold EDIT + UP/DOWN moves it)",
        command: "left",
      },
      {
        name: "Bookmark Color",
        description: "in row select, hold OPTION + LEFT/RIGHT",
        extra: "(EDIT + OPTION clears)",
        command: "optionhold left right",
      },
      {
        name: "Move Track",
        description: "on row 00, double-tap UP",
        extra: "(then hold EDIT + LEFT/RIGHT)",
        command: "up double",
      },
    ],
  },
  {
    column: 2,
    section: "Chain Screen",
    color: "orange",
    icon: "chain",
    actions: [
      {
        name: "Create",
        secondary: "new phrase",
        description: "double-tap EDIT",
        command: "edit double",
      },
      {
        name: "Jump to Track",
        secondary: "left or right",
        description: "hold OPTION + LEFT/RIGHT",
        command: "optionhold left right",
      },
      {
        name: "Jump to Chain",
        secondary: "prev or next",
        description: "hold OPTION + UP/DOWN",
        command: "optionhold up down",
      },
    ],
  },

  // Column 3
  {
    column: 3,
    section: "Instrument Screen",
    color: "blue",
    icon: "instrument",
    actions: [
      {
        name: "Preview Instrument",
        description: "hold EDIT + PLAY",
        command: "edithold play",
      },
      {
        name: "Jump to Instrument",
        secondary: "prev or next",
        description: "hold OPTION + LEFT/RIGHT",
        command: "optionhold left right",
      },
      {
        name: "Quick FX Jump",
        secondary: "set default FX",
        description: "on a parameter, hold SHIFT + LEFT/RIGHT",
        command: "shifthold left right",
      },
      {
        name: "Edit Parameter",
        description: "EDIT + touchscreen LEFT/RIGHT",
        command: "edithold",
      },
      {
        name: "Map Parameter",
        description: "OPTION + touchscreen LEFT/RIGHT or UP/DOWN",
        command: "optionhold",
      },
    ],
  },
  {
    column: 3,
    section: "Phrase Screen",
    color: "orange",
    icon: "phrase",
    actions: [
      {
        name: "Create",
        secondary: "new instrument",
        description: "on instrument column, double-tap EDIT",
        command: "edit double",
      },
      {
        name: "Jump to Track",
        secondary: "left or right",
        description: "hold OPTION + LEFT/RIGHT",
        command: "optionhold left right",
      },
      {
        name: "Jump to Phrase",
        secondary: "prev or next",
        description: "hold OPTION + UP/DOWN",
        command: "optionhold up down",
      },
      {
        name: "Interpolate",
        description: "on one column, hold SHIFT + EDIT",
        command: "shifthold edit",
        selection: true,
      },
      {
        name: "Move Selection",
        description: "on several columns, hold EDIT + UP/DOWN",
        command: "edithold up down",
        selection: true,
      },
      {
        name: "Note Fill",
        description: "on note column, hold OPTION + LEFT",
        command: "optionhold left",
        selection: true,
      },
      {
        name: "Random Fill",
        description: "on note column, hold OPTION + RIGHT",
        extra: "(include velocity to randomize it too)",
        command: "optionhold right",
        selection: true,
      },
      {
        name: "Randomize Notes",
        secondary: "up or down",
        description: "on note column, hold OPTION + UP/DOWN",
        command: "optionhold up down",
        selection: true,
      },
      {
        name: "Effect Help",
        description: "on command column, hold EDIT + UP/DOWN",
        command: "edithold up down",
      },
    ],
  },
  {
    column: 3,
    section: "Instrument Pool",
    color: "blue",
    icon: "pool",
    actions: [
      {
        name: "Select / Load",
        description: "EDIT",
        command: "edit",
      },
      {
        name: "Preview Instrument",
        description: "PLAY",
        command: "play",
      },
      {
        name: "Move Instrument",
        secondary: "reorder",
        description: "on name column, hold EDIT + UP/DOWN",
        command: "edithold up down",
      },
    ],
  },
  {
    column: 3,
    section: "Sample Editor",
    color: "blue",
    icon: "sample",
    actions: [
      {
        name: "Lazy Chop",
        secondary: "add slices",
        description: "while playing, hold PLAY + tap EDIT",
        command: "playhold edit",
      },
      {
        name: "Zoom / Fine Select",
        description: "hold EDIT + LEFT/RIGHT",
        command: "edithold left right",
      },
      {
        name: "Snap Selection",
        secondary: "to beat",
        description: "hold OPTION + UP/DOWN",
        command: "optionhold up down",
      },
    ],
  },
];
