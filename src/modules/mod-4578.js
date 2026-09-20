'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4578",
  name: "Replace \"8\" with \"P\"",
  description: "Replaces every 8 with P.",
  run: (value) => String(value).split("8").join("P"),
});
