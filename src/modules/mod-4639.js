'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4639",
  name: "Replace \"9\" with \"P\"",
  description: "Replaces every 9 with P.",
  run: (value) => String(value).split("9").join("P"),
});
