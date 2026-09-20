'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1425",
  name: "Replace \"i\" with \"9\"",
  description: "Replaces every i with 9.",
  run: (value) => String(value).split("i").join("9"),
});
