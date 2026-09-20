'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1398",
  name: "Replace \"i\" with \"I\"",
  description: "Replaces every i with I.",
  run: (value) => String(value).split("i").join("I"),
});
