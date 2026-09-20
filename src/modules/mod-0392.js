'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0392",
  name: "Pad end to 9 with \"~\"",
  description: "Right-pads the value to width 9 with \"~\".",
  run: (value) => String(value).padEnd(9, "~"),
});
