'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0213",
  name: "Pad end to 5 with \"=\"",
  description: "Right-pads the value to width 5 with \"=\".",
  run: (value) => String(value).padEnd(5, "="),
});
