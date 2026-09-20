'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1123",
  name: "Pad start to 38 with \"=\"",
  description: "Left-pads the value to width 38 with \"=\".",
  run: (value) => String(value).padStart(38, "="),
});
