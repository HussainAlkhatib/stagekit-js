'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0962",
  name: "Pad end to 32 with \"_\"",
  description: "Right-pads the value to width 32 with \"_\".",
  run: (value) => String(value).padEnd(32, "_"),
});
