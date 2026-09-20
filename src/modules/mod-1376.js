'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1376",
  name: "Replace \"i\" with \"m\"",
  description: "Replaces every i with m.",
  run: (value) => String(value).split("i").join("m"),
});
