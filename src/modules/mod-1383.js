'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1383",
  name: "Replace \"i\" with \"t\"",
  description: "Replaces every i with t.",
  run: (value) => String(value).split("i").join("t"),
});
