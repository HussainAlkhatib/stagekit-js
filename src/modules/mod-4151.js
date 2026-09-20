'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4151",
  name: "Replace \"1\" with \"P\"",
  description: "Replaces every 1 with P.",
  run: (value) => String(value).split("1").join("P"),
});
