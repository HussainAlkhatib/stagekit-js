'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0075",
  name: "Pad start to 4 with \"+\"",
  description: "Left-pads the value to width 4 with \"+\".",
  run: (value) => String(value).padStart(4, "+"),
});
