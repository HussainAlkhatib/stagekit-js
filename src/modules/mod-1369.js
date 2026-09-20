'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1369",
  name: "Replace \"i\" with \"e\"",
  description: "Replaces every i with e.",
  run: (value) => String(value).split("i").join("e"),
});
