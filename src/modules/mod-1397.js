'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1397",
  name: "Replace \"i\" with \"H\"",
  description: "Replaces every i with H.",
  run: (value) => String(value).split("i").join("H"),
});
