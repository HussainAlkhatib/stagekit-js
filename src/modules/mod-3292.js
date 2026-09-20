'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3292",
  name: "Replace \"N\" with \"K\"",
  description: "Replaces every N with K.",
  run: (value) => String(value).split("N").join("K"),
});
