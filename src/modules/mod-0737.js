'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0737",
  name: "Pad end to 22 with \"~\"",
  description: "Right-pads the value to width 22 with \"~\".",
  run: (value) => String(value).padEnd(22, "~"),
});
