'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0612",
  name: "Replace \"b\" with \"X\"",
  description: "Replaces every b with X.",
  run: (value) => String(value).split("b").join("X"),
});
