'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4517",
  name: "Replace \"7\" with \"P\"",
  description: "Replaces every 7 with P.",
  run: (value) => String(value).split("7").join("P"),
});
