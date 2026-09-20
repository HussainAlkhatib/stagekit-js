'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1416",
  name: "Replace \"i\" with \"0\"",
  description: "Replaces every i with 0.",
  run: (value) => String(value).split("i").join("0"),
});
