'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3296",
  name: "Replace \"N\" with \"P\"",
  description: "Replaces every N with P.",
  run: (value) => String(value).split("N").join("P"),
});
