'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1118",
  name: "Pad end to 38 with \".\"",
  description: "Right-pads the value to width 38 with \".\".",
  run: (value) => String(value).padEnd(38, "."),
});
