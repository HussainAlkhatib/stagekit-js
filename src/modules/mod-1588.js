'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1588",
  name: "Replace \"l\" with \"P\"",
  description: "Replaces every l with P.",
  run: (value) => String(value).split("l").join("P"),
});
