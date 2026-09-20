'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1417",
  name: "Replace \"i\" with \"1\"",
  description: "Replaces every i with 1.",
  run: (value) => String(value).split("i").join("1"),
});
