'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3663",
  name: "Replace \"T\" with \"P\"",
  description: "Replaces every T with P.",
  run: (value) => String(value).split("T").join("P"),
});
