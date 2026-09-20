'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0358",
  name: "Pad start to 8 with \"=\"",
  description: "Left-pads the value to width 8 with \"=\".",
  run: (value) => String(value).padStart(8, "="),
});
