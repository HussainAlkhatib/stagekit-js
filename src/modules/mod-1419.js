'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1419",
  name: "Replace \"i\" with \"3\"",
  description: "Replaces every i with 3.",
  run: (value) => String(value).split("i").join("3"),
});
