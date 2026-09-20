'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0553",
  name: "Pad start to 15 with \"_\"",
  description: "Left-pads the value to width 15 with \"_\".",
  run: (value) => String(value).padStart(15, "_"),
});
