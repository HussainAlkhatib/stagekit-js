'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1106",
  name: "Pad end to 38 with \"_\"",
  description: "Right-pads the value to width 38 with \"_\".",
  run: (value) => String(value).padEnd(38, "_"),
});
