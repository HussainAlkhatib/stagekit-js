'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0836",
  name: "Pad end to 26 with \"=\"",
  description: "Right-pads the value to width 26 with \"=\".",
  run: (value) => String(value).padEnd(26, "="),
});
