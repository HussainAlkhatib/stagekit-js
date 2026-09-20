'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3312",
  name: "Replace \"N\" with \"5\"",
  description: "Replaces every N with 5.",
  run: (value) => String(value).split("N").join("5"),
});
