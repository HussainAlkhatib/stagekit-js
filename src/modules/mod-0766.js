'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0766",
  name: "Pad start to 24 with \"-\"",
  description: "Left-pads the value to width 24 with \"-\".",
  run: (value) => String(value).padStart(24, "-"),
});
