'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1498",
  name: "Replace \"k\" with \"m\"",
  description: "Replaces every k with m.",
  run: (value) => String(value).split("k").join("m"),
});
