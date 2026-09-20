'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2564",
  name: "Replace \"B\" with \"P\"",
  description: "Replaces every B with P.",
  run: (value) => String(value).split("B").join("P"),
});
