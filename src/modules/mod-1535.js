'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1535",
  name: "Replace \"k\" with \"X\"",
  description: "Replaces every k with X.",
  run: (value) => String(value).split("k").join("X"),
});
