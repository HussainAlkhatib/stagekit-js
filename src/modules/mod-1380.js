'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1380",
  name: "Replace \"i\" with \"q\"",
  description: "Replaces every i with q.",
  run: (value) => String(value).split("i").join("q"),
});
