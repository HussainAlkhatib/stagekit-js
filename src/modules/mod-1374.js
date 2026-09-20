'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1374",
  name: "Replace \"i\" with \"k\"",
  description: "Replaces every i with k.",
  run: (value) => String(value).split("i").join("k"),
});
