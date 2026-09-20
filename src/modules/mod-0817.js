'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0817",
  name: "Pad start to 26 with \"_\"",
  description: "Left-pads the value to width 26 with \"_\".",
  run: (value) => String(value).padStart(26, "_"),
});
