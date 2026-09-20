'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3357",
  name: "Replace \"O\" with \"P\"",
  description: "Replaces every O with P.",
  run: (value) => String(value).split("O").join("P"),
});
