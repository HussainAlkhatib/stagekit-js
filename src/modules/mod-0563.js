'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0563",
  name: "Pad end to 15 with \"+\"",
  description: "Right-pads the value to width 15 with \"+\".",
  run: (value) => String(value).padEnd(15, "+"),
});
