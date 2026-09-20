'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0761",
  name: "Pad end to 23 with \"~\"",
  description: "Right-pads the value to width 23 with \"~\".",
  run: (value) => String(value).padEnd(23, "~"),
});
