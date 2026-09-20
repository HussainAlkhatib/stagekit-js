'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4334",
  name: "Replace \"4\" with \"P\"",
  description: "Replaces every 4 with P.",
  run: (value) => String(value).split("4").join("P"),
});
