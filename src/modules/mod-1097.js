'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1097",
  name: "Pad end to 37 with \"~\"",
  description: "Right-pads the value to width 37 with \"~\".",
  run: (value) => String(value).padEnd(37, "~"),
});
