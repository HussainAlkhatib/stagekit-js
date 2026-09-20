'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0910",
  name: "Pad start to 30 with \"-\"",
  description: "Left-pads the value to width 30 with \"-\".",
  run: (value) => String(value).padStart(30, "-"),
});
