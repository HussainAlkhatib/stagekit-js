'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0691",
  name: "Pad start to 20 with \"=\"",
  description: "Left-pads the value to width 20 with \"=\".",
  run: (value) => String(value).padStart(20, "="),
});
