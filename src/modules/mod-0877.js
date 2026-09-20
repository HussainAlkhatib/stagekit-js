'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0877",
  name: "Pad start to 28 with \".\"",
  description: "Left-pads the value to width 28 with \".\".",
  run: (value) => String(value).padStart(28, "."),
});
