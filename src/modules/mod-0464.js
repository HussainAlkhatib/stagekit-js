'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0464",
  name: "Pad end to 12 with \"-\"",
  description: "Right-pads the value to width 12 with \"-\".",
  run: (value) => String(value).padEnd(12, "-"),
});
