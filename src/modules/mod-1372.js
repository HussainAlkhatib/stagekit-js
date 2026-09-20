'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1372",
  name: "Replace \"i\" with \"h\"",
  description: "Replaces every i with h.",
  run: (value) => String(value).split("i").join("h"),
});
