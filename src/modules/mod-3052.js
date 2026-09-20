'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3052",
  name: "Replace \"J\" with \"P\"",
  description: "Replaces every J with P.",
  run: (value) => String(value).split("J").join("P"),
});
