'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1371",
  name: "Replace \"i\" with \"g\"",
  description: "Replaces every i with g.",
  run: (value) => String(value).split("i").join("g"),
});
