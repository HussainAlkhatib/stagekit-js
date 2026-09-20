'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3235",
  name: "Replace \"M\" with \"P\"",
  description: "Replaces every M with P.",
  run: (value) => String(value).split("M").join("P"),
});
