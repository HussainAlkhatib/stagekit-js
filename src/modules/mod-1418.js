'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1418",
  name: "Replace \"i\" with \"2\"",
  description: "Replaces every i with 2.",
  run: (value) => String(value).split("i").join("2"),
});
