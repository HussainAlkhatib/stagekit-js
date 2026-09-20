'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1415",
  name: "Replace \"i\" with \"Z\"",
  description: "Replaces every i with Z.",
  run: (value) => String(value).split("i").join("Z"),
});
