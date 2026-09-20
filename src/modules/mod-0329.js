'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0329",
  name: "Pad end to 8 with \"_\"",
  description: "Right-pads the value to width 8 with \"_\".",
  run: (value) => String(value).padEnd(8, "_"),
});
