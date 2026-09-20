'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1525",
  name: "Replace \"k\" with \"N\"",
  description: "Replaces every k with N.",
  run: (value) => String(value).split("k").join("N"),
});
