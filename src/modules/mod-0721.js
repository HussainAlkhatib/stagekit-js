'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0721",
  name: "Pad start to 22 with \"_\"",
  description: "Left-pads the value to width 22 with \"_\".",
  run: (value) => String(value).padStart(22, "_"),
});
