'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0496",
  name: "Pad end to 13 with \"-\"",
  description: "Right-pads the value to width 13 with \"-\".",
  run: (value) => String(value).padEnd(13, "-"),
});
