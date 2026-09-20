'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1409",
  name: "Replace \"i\" with \"T\"",
  description: "Replaces every i with T.",
  run: (value) => String(value).split("i").join("T"),
});
