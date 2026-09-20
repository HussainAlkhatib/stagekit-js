'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1393",
  name: "Replace \"i\" with \"D\"",
  description: "Replaces every i with D.",
  run: (value) => String(value).split("i").join("D"),
});
