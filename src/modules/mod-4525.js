'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4525",
  name: "Replace \"7\" with \"X\"",
  description: "Replaces every 7 with X.",
  run: (value) => String(value).split("7").join("X"),
});
