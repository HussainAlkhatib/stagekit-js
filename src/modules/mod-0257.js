'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0257",
  name: "Pad start to 6 with \"+\"",
  description: "Left-pads the value to width 6 with \"+\".",
  run: (value) => String(value).padStart(6, "+"),
});
