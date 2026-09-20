'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1400",
  name: "Replace \"i\" with \"K\"",
  description: "Replaces every i with K.",
  run: (value) => String(value).split("i").join("K"),
});
