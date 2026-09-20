'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1388",
  name: "Replace \"i\" with \"y\"",
  description: "Replaces every i with y.",
  run: (value) => String(value).split("i").join("y"),
});
