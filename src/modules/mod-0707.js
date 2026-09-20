'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0707",
  name: "Pad end to 21 with \"+\"",
  description: "Right-pads the value to width 21 with \"+\".",
  run: (value) => String(value).padEnd(21, "+"),
});
