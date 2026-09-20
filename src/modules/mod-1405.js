'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1405",
  name: "Replace \"i\" with \"P\"",
  description: "Replaces every i with P.",
  run: (value) => String(value).split("i").join("P"),
});
