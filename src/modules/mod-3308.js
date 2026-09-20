'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3308",
  name: "Replace \"N\" with \"1\"",
  description: "Replaces every N with 1.",
  run: (value) => String(value).split("N").join("1"),
});
