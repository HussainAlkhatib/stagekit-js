'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0644",
  name: "Pad end to 18 with \"=\"",
  description: "Right-pads the value to width 18 with \"=\".",
  run: (value) => String(value).padEnd(18, "="),
});
