'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4586",
  name: "Replace \"8\" with \"X\"",
  description: "Replaces every 8 with X.",
  run: (value) => String(value).split("8").join("X"),
});
