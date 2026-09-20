'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1403",
  name: "Replace \"i\" with \"N\"",
  description: "Replaces every i with N.",
  run: (value) => String(value).split("i").join("N"),
});
