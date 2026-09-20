'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1057",
  name: "Pad start to 36 with \"_\"",
  description: "Left-pads the value to width 36 with \"_\".",
  run: (value) => String(value).padStart(36, "_"),
});
