const data = [
  {
    section: "Navigation",
    actions: [
      {
        name: "Move Cursor",
        description: "UP or DOWN or LEFT or RIGHT",
        command: "up down left right",
      },
      {
        name: "Screen Navigation",
        description: "hold SHIFT + [ UP or DOWN or LEFT or RIGHT ]",
        command: "shifthold up down left right",
      },
    ],
  },
  {
    section: "Editing",
    actions: [
      {
        name: "Change Value",
        secondary: "fine",
        description: "hold EDIT + [ LEFT or RIGHT ]",
        command: "edithold left right",
      },
      {
        name: "Change Value",
        secondary: "coarse",
        description: "hold EDIT + [ UP or DOWN ]",
        command: "edithold up down",
      },
      {
        name: "Cut Value",
        secondary: "or set to default",
        description: "EDIT + OPTION",
        command: "edit option",
      },
      {
        name: "YES",
        secondary: "in dialog",
        description: "EDIT",
        command: "edit",
      },
      {
        name: "NO",
        secondary: "(or exit) in dialog",
        description: "OPTION",
        command: "option",
      },
    ],
  },
  {
    section: "Play",
    actions: [
      {
        name: "Play All Tracks",
        secondary: "from song cursor",
        description: "hold SHIFT + PLAY",
        command: "shifthold play",
      },
      {
        name: "Mute Current Track",
        description: "hold OPTION + SHIFT",
        extra: "(latch mute by releasing OPTION first)",
        command: "optionhold shift",
      },
      {
        name: "Solo Current Track",
        description: "hold OPTION + PLAY",
        extra: "(latch solo by releasing OPTION first)",
        command: "optionhold play",
        page: 11,
      },
      {
        name: "Clear All Mute",
        secondary: " and solos",
        description: "hold OPTION + hold SHIFT + PLAY",
        command: "optionhold shifthold play",
        page: 11,
      },
    ],
  },
  {
    section: "Mixer Screen",
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
    ],
  },
  {
    section: "Global",
    actions: [
      {
        name: "Cycle Themes",
        description: "hold SHIFT + OPTION then tap UP",
        command: "shifthold option1st up2nd",
      },
      {
        name: "Toggle Display Mode",
        secondary: "Oscilloscope",
        description: "hold SHIFT + OPTION then tap DOWN",
        command: "shifthold option1st down2nd",
      },
    ],
  },
  {
    section: "Phrase Screen",
    actions: [
      {
        name: "Create",
        secondary: "new instrument",
        description: "on instrument column, EDIT (double-tap)",
        command: "edit double",
      },
      {
        name: "Clone and Paste",
        secondary: "instrument",
        description: "hold SHIFT + OPTION then EDIT",
        command: "shifthold option1st edit2nd",
      },
      {
        name: "Jump to Track",
        secondary: "left or right",
        description: "hold OPTION + [ LEFT or RIGHT ] ",
        command: "optionhold left right",
      },
      {
        name: "Jump to Phrase",
        secondary: "previous or next",
        description: "hold OPTION + [ UP or DOWN ] ",
        command: "optionhold up down",
      },
      {
        name: "Interpolate",
        description: "in selection mode (single column), hold SHIFT + EDIT",
        command: "shifthold edit",
      },
      {
        name: "Move",
        secondary: "selection",
        description:
          "in selection mode (multi column), hold EDIT + [ UP or DOWN]",
        command: "edithold up down",
      },
      {
        name: "Note Fill",
        secondary: "",
        description: "in selection mode (note column), hold OPTION + LEFT",
        command: "optionhold left",
      },
      {
        name: "Random Fill",
        description: "in selection mode (note column), hold OPTION + RIGHT",
        extra: "velocity can be randomized if selected",
        command: "optionhold right",
      },
      {
        name: "Randomize Notes",
        secondary: "Up or Down",
        description:
          "in selection mode (note column), hold OPTION + [UP or DOWN]",
        command: "optionhold up down",
        page: 15,
      },
    ],
  },
  {
    section: "Selection",
    actions: [
      {
        name: "Enter Selection Mode",
        description: "hold SHIFT + OPTION",
        extra: "(tap OPTION to cycle through modes)",
        command: "shifthold option",
      },
      {
        name: "Copy Selection",
        secondary: "(exit mode)",
        description: "OPTION",
        command: "option",
      },
      {
        name: "Paste Copy Buffer",
        description: "hold SHIFT + EDIT",
        command: "shifthold edit",
      },
    ],
  },
  {
    section: "Instrument Screen",
    actions: [
      {
        name: "Preview Instrument",
        description: "PLAY",
        command: "play",
      },
      {
        name: "Copy Instrument",
        description: "hold SHIFT + OPTION",
        command: "shifthold option",
      },
      {
        name: "Jump to Instrument",
        secondary: "previous or next",
        description: "OPTION + [ LEFT or RIGHT ] ",
        command: "optionhold left right",
      },
      {
        name: "Edit Parameter",
        description: "EDIT + [ Touchscreen LEFT and RIGHT ]",
        command: "edithold",
      },
      {
        name: "Map Parameter",
        description: "OPTION + [ Touchscreen LEFT and RIGHT or UP and DOWN ]",
        command: "optionhold",
      },
    ],
  },
  {
    section: "Song Screen",
    actions: [
      {
        name: "Cue Row",
        secondary: "while playing",
        description: "hold LEFT + PLAY",
        command: "lefthold play",
      },
      {
        name: "Create",
        secondary: "new chain",
        description: "double-tap EDIT",
        command: "edit double",
      },
      {
        name: "Clone and Paste",
        secondary: "chain alone",
        description: "hold SHIFT + OPTION then EDIT",
        command: "shifthold option1st edit2nd",
      },
      {
        name: "Clone and Paste",
        secondary: "chain & phrases",
        description: "hold SHIFT + OPTION then double-tap EDIT",
        command: "shifthold option1st edit2nd double",
      },
      {
        name: "Solo Tracks",
        secondary: "left or right",
        description: "hold OPTION + [ LEFT or RIGHT ] ",
        command: "optionhold left right",
      },
      {
        name: "Solo Row",
        secondary: "Live Mode",
        description: "hold OPTION + PLAY",
        command: "optionhold play",
      },
      {
        name: "Jump 16 Rows",
        secondary: "up or down",
        description: "hold OPTION + [ UP or DOWN ] ",
        command: "optionhold up down",
      },
      {
        name: "Move Selection",
        description: "in selection mode, hold EDIT + [ UP or DOWN ]",
        command: "edithold up down",
      },
      {
        name: "Render Selection",
        description: "in selection mode, double-tap EDIT",
        command: "edit double",
      },
    ],
  },
  {
    section: "File Browser",
    actions: [
      {
        name: "Preview Sample",
        description: "PLAY",
        command: "play",
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
    section: "Chain Screen",
    actions: [
      {
        name: "Create",
        secondary: "new phrase",
        description: "double-tap EDIT",
        command: "edit double",
      },
      {
        name: "Clone and Paste",
        secondary: "phrase",
        description: "hold SHIFT + OPTION then EDIT",
        command: "shifthold option1st edit2nd",
      },
      {
        name: "Jump to Track",
        secondary: "left or right",
        description: "hold OPTION + [ LEFT or RIGHT ] ",
        command: "optionhold left right",
      },
      {
        name: "Jump to Chain",
        secondary: "previous or next",
        description: "hold OPTION + [ UP or DOWN ]",
        command: "optionhold up down",
      },
      {
        name: "Play All Tracks",
        secondary: "continue song from cursor position",
        description: "hold SHIFT + PLAY",
        command: "shifthold play",
      },
    ],
  },
];
