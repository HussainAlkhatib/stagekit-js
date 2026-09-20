'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0793",
  name: "Pad start to 25 with \"_\"",
  description: "Left-pads the value to width 25 with \"_\".",
  run: (value) => String(value).padStart(25, "_"),
});
