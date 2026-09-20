'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1034",
  name: "Pad end to 35 with \"_\"",
  description: "Right-pads the value to width 35 with \"_\".",
  run: (value) => String(value).padEnd(35, "_"),
});
