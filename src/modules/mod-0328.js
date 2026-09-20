'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0328",
  name: "Pad start to 8 with \"_\"",
  description: "Left-pads the value to width 8 with \"_\".",
  run: (value) => String(value).padStart(8, "_"),
});
