'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1421",
  name: "Replace \"i\" with \"5\"",
  description: "Replaces every i with 5.",
  run: (value) => String(value).split("i").join("5"),
});
