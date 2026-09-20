'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1420",
  name: "Replace \"i\" with \"4\"",
  description: "Replaces every i with 4.",
  run: (value) => String(value).split("i").join("4"),
});
