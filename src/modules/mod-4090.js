'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4090",
  name: "Replace \"0\" with \"P\"",
  description: "Replaces every 0 with P.",
  run: (value) => String(value).split("0").join("P"),
});
