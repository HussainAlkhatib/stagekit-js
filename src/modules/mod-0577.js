'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0577",
  name: "Pad start to 16 with \"_\"",
  description: "Left-pads the value to width 16 with \"_\".",
  run: (value) => String(value).padStart(16, "_"),
});
