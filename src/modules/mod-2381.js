'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2381",
  name: "Replace \"y\" with \"P\"",
  description: "Replaces every y with P.",
  run: (value) => String(value).split("y").join("P"),
});
