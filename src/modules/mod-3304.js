'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3304",
  name: "Replace \"N\" with \"X\"",
  description: "Replaces every N with X.",
  run: (value) => String(value).split("N").join("X"),
});
