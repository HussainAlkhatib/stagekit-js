'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1058",
  name: "Pad end to 36 with \"_\"",
  description: "Right-pads the value to width 36 with \"_\".",
  run: (value) => String(value).padEnd(36, "_"),
});
