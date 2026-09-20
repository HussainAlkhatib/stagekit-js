'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1375",
  name: "Replace \"i\" with \"l\"",
  description: "Replaces every i with l.",
  run: (value) => String(value).split("i").join("l"),
});
