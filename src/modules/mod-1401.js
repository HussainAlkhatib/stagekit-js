'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1401",
  name: "Replace \"i\" with \"L\"",
  description: "Replaces every i with L.",
  run: (value) => String(value).split("i").join("L"),
});
