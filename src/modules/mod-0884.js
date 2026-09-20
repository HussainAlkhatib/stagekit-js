'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0884",
  name: "Pad end to 28 with \"=\"",
  description: "Right-pads the value to width 28 with \"=\".",
  run: (value) => String(value).padEnd(28, "="),
});
