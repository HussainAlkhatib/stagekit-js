'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0318",
  name: "Pad start to 7 with \"=\"",
  description: "Left-pads the value to width 7 with \"=\".",
  run: (value) => String(value).padStart(7, "="),
});
