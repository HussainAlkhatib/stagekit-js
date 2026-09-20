'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1527",
  name: "Replace \"k\" with \"P\"",
  description: "Replaces every k with P.",
  run: (value) => String(value).split("k").join("P"),
});
