'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1150",
  name: "Pad start to 40 with \"-\"",
  description: "Left-pads the value to width 40 with \"-\".",
  run: (value) => String(value).padStart(40, "-"),
});
