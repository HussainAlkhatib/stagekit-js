'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0395",
  name: "Pad start to 9 with \"=\"",
  description: "Left-pads the value to width 9 with \"=\".",
  run: (value) => String(value).padStart(9, "="),
});
