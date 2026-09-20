'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0841",
  name: "Pad start to 27 with \"_\"",
  description: "Left-pads the value to width 27 with \"_\".",
  run: (value) => String(value).padStart(27, "_"),
});
