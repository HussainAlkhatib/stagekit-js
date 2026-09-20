'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1391",
  name: "Replace \"i\" with \"B\"",
  description: "Replaces every i with B.",
  run: (value) => String(value).split("i").join("B"),
});
