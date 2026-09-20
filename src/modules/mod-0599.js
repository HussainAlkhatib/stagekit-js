'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0599",
  name: "Pad end to 17 with \"-\"",
  description: "Right-pads the value to width 17 with \"-\".",
  run: (value) => String(value).padEnd(17, "-"),
});
