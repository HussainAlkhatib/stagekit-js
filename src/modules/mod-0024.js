'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0024",
  name: "Pad start to 4 with \"_\"",
  description: "Left-pads the value to width 4 with \"_\".",
  run: (value) => String(value).padStart(4, "_"),
});
