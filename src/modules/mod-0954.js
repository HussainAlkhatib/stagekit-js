'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0954",
  name: "Replace \"d\" with \"P\"",
  description: "Replaces every d with P.",
  run: (value) => String(value).split("d").join("P"),
});
