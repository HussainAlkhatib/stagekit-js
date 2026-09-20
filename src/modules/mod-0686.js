'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0686",
  name: "Pad end to 20 with \".\"",
  description: "Right-pads the value to width 20 with \".\".",
  run: (value) => String(value).padEnd(20, "."),
});
