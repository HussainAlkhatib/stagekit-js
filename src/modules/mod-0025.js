'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0025",
  name: "Pad end to 4 with \"_\"",
  description: "Right-pads the value to width 4 with \"_\".",
  run: (value) => String(value).padEnd(4, "_"),
});
