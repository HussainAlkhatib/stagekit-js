'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2625",
  name: "Replace \"C\" with \"P\"",
  description: "Replaces every C with P.",
  run: (value) => String(value).split("C").join("P"),
});
