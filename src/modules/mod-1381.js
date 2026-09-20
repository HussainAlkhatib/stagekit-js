'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1381",
  name: "Replace \"i\" with \"r\"",
  description: "Replaces every i with r.",
  run: (value) => String(value).split("i").join("r"),
});
