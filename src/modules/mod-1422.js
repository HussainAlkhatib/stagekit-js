'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1422",
  name: "Replace \"i\" with \"6\"",
  description: "Replaces every i with 6.",
  run: (value) => String(value).split("i").join("6"),
});
