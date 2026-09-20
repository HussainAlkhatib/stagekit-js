'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1385",
  name: "Replace \"i\" with \"v\"",
  description: "Replaces every i with v.",
  run: (value) => String(value).split("i").join("v"),
});
