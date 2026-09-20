'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1396",
  name: "Replace \"i\" with \"G\"",
  description: "Replaces every i with G.",
  run: (value) => String(value).split("i").join("G"),
});
