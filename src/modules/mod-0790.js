'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0790",
  name: "Pad start to 25 with \"-\"",
  description: "Left-pads the value to width 25 with \"-\".",
  run: (value) => String(value).padStart(25, "-"),
});
