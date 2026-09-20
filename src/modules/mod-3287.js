'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3287",
  name: "Replace \"N\" with \"F\"",
  description: "Replaces every N with F.",
  run: (value) => String(value).split("N").join("F"),
});
