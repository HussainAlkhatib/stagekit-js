'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1384",
  name: "Replace \"i\" with \"u\"",
  description: "Replaces every i with u.",
  run: (value) => String(value).split("i").join("u"),
});
