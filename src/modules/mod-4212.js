'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4212",
  name: "Replace \"2\" with \"P\"",
  description: "Replaces every 2 with P.",
  run: (value) => String(value).split("2").join("P"),
});
