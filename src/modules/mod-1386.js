'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1386",
  name: "Replace \"i\" with \"w\"",
  description: "Replaces every i with w.",
  run: (value) => String(value).split("i").join("w"),
});
