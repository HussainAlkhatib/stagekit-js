'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1408",
  name: "Replace \"i\" with \"S\"",
  description: "Replaces every i with S.",
  run: (value) => String(value).split("i").join("S"),
});
