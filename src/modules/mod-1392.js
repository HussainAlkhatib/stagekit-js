'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1392",
  name: "Replace \"i\" with \"C\"",
  description: "Replaces every i with C.",
  run: (value) => String(value).split("i").join("C"),
});
