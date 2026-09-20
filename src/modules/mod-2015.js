'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2015",
  name: "Replace \"s\" with \"P\"",
  description: "Replaces every s with P.",
  run: (value) => String(value).split("s").join("P"),
});
