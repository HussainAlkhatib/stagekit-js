'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1414",
  name: "Replace \"i\" with \"Y\"",
  description: "Replaces every i with Y.",
  run: (value) => String(value).split("i").join("Y"),
});
