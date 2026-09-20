'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1070",
  name: "Pad end to 36 with \".\"",
  description: "Right-pads the value to width 36 with \".\".",
  run: (value) => String(value).padEnd(36, "."),
});
