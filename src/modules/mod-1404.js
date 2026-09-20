'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1404",
  name: "Replace \"i\" with \"O\"",
  description: "Replaces every i with O.",
  run: (value) => String(value).split("i").join("O"),
});
