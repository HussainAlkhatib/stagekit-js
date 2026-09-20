'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0575",
  name: "Pad end to 16 with \"-\"",
  description: "Right-pads the value to width 16 with \"-\".",
  run: (value) => String(value).padEnd(16, "-"),
});
