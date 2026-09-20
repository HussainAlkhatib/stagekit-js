'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1126",
  name: "Pad start to 39 with \"-\"",
  description: "Left-pads the value to width 39 with \"-\".",
  run: (value) => String(value).padStart(39, "-"),
});
