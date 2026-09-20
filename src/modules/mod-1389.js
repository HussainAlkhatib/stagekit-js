'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1389",
  name: "Replace \"i\" with \"z\"",
  description: "Replaces every i with z.",
  run: (value) => String(value).split("i").join("z"),
});
