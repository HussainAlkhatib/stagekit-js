'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1547",
  name: "Replace \"k\" with \"9\"",
  description: "Replaces every k with 9.",
  run: (value) => String(value).split("k").join("9"),
});
