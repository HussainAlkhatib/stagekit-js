'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0588",
  name: "Replace \"b\" with \"P\"",
  description: "Replaces every b with P.",
  run: (value) => String(value).split("b").join("P"),
});
