'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1387",
  name: "Replace \"i\" with \"x\"",
  description: "Replaces every i with x.",
  run: (value) => String(value).split("i").join("x"),
});
