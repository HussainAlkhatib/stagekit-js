'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1370",
  name: "Replace \"i\" with \"f\"",
  description: "Replaces every i with f.",
  run: (value) => String(value).split("i").join("f"),
});
