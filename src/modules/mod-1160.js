'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1160",
  name: "Pad end to 40 with \"#\"",
  description: "Right-pads the value to width 40 with \"#\".",
  run: (value) => String(value).padEnd(40, "#"),
});
