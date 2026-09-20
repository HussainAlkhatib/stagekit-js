'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1395",
  name: "Replace \"i\" with \"F\"",
  description: "Replaces every i with F.",
  run: (value) => String(value).split("i").join("F"),
});
