'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1390",
  name: "Replace \"i\" with \"A\"",
  description: "Replaces every i with A.",
  run: (value) => String(value).split("i").join("A"),
});
