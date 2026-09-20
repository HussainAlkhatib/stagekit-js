'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1406",
  name: "Replace \"i\" with \"Q\"",
  description: "Replaces every i with Q.",
  run: (value) => String(value).split("i").join("Q"),
});
