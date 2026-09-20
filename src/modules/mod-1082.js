'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1082",
  name: "Pad end to 37 with \"_\"",
  description: "Right-pads the value to width 37 with \"_\".",
  run: (value) => String(value).padEnd(37, "_"),
});
