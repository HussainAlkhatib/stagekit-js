'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3907",
  name: "Replace \"X\" with \"P\"",
  description: "Replaces every X with P.",
  run: (value) => String(value).split("X").join("P"),
});
