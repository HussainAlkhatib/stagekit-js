'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0059",
  name: "Pad end to 4 with \"#\"",
  description: "Right-pads the value to width 4 with \"#\".",
  run: (value) => String(value).padEnd(4, "#"),
});
