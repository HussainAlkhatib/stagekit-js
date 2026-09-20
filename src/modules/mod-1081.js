'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1081",
  name: "Pad start to 37 with \"_\"",
  description: "Left-pads the value to width 37 with \"_\".",
  run: (value) => String(value).padStart(37, "_"),
});
