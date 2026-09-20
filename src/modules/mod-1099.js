'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1099",
  name: "Pad start to 37 with \"=\"",
  description: "Left-pads the value to width 37 with \"=\".",
  run: (value) => String(value).padStart(37, "="),
});
