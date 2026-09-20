'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4456",
  name: "Replace \"6\" with \"P\"",
  description: "Replaces every 6 with P.",
  run: (value) => String(value).split("6").join("P"),
});
