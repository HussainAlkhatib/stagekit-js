'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1402",
  name: "Replace \"i\" with \"M\"",
  description: "Replaces every i with M.",
  run: (value) => String(value).split("i").join("M"),
});
