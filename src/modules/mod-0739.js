'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0739",
  name: "Pad start to 22 with \"=\"",
  description: "Left-pads the value to width 22 with \"=\".",
  run: (value) => String(value).padStart(22, "="),
});
