'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1366",
  name: "Replace \"i\" with \"b\"",
  description: "Replaces every i with b.",
  run: (value) => String(value).split("i").join("b"),
});
