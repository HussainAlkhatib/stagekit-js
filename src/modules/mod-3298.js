'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3298",
  name: "Replace \"N\" with \"R\"",
  description: "Replaces every N with R.",
  run: (value) => String(value).split("N").join("R"),
});
