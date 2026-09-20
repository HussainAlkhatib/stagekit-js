'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1523",
  name: "Replace \"k\" with \"L\"",
  description: "Replaces every k with L.",
  run: (value) => String(value).split("k").join("L"),
});
