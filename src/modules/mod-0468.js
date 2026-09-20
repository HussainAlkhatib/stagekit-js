'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0468",
  name: "Pad end to 12 with \"_\"",
  description: "Right-pads the value to width 12 with \"_\".",
  run: (value) => String(value).padEnd(12, "_"),
});
