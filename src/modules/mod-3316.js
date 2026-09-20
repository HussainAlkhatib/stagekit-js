'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3316",
  name: "Replace \"N\" with \"9\"",
  description: "Replaces every N with 9.",
  run: (value) => String(value).split("N").join("9"),
});
