'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1379",
  name: "Replace \"i\" with \"p\"",
  description: "Replaces every i with p.",
  run: (value) => String(value).split("i").join("p"),
});
