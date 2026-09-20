'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1368",
  name: "Replace \"i\" with \"d\"",
  description: "Replaces every i with d.",
  run: (value) => String(value).split("i").join("d"),
});
