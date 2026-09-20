'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0530",
  name: "Pad end to 14 with \"_\"",
  description: "Right-pads the value to width 14 with \"_\".",
  run: (value) => String(value).padEnd(14, "_"),
});
