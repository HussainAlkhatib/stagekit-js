'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1407",
  name: "Replace \"i\" with \"R\"",
  description: "Replaces every i with R.",
  run: (value) => String(value).split("i").join("R"),
});
