'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0483",
  name: "Pad start to 12 with \".\"",
  description: "Left-pads the value to width 12 with \".\".",
  run: (value) => String(value).padStart(12, "."),
});
