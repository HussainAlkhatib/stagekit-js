'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0578",
  name: "Pad end to 16 with \"_\"",
  description: "Right-pads the value to width 16 with \"_\".",
  run: (value) => String(value).padEnd(16, "_"),
});
