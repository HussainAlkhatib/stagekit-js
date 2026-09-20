'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0601",
  name: "Pad start to 17 with \"_\"",
  description: "Left-pads the value to width 17 with \"_\".",
  run: (value) => String(value).padStart(17, "_"),
});
