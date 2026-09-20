'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1526",
  name: "Replace \"k\" with \"O\"",
  description: "Replaces every k with O.",
  run: (value) => String(value).split("k").join("O"),
});
