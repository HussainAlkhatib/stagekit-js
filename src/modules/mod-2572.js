'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2572",
  name: "Replace \"B\" with \"X\"",
  description: "Replaces every B with X.",
  run: (value) => String(value).split("B").join("X"),
});
