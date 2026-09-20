'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1105",
  name: "Pad start to 38 with \"_\"",
  description: "Left-pads the value to width 38 with \"_\".",
  run: (value) => String(value).padStart(38, "_"),
});
