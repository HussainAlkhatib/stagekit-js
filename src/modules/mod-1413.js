'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1413",
  name: "Replace \"i\" with \"X\"",
  description: "Replaces every i with X.",
  run: (value) => String(value).split("i").join("X"),
});
