'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3289",
  name: "Replace \"N\" with \"H\"",
  description: "Replaces every N with H.",
  run: (value) => String(value).split("N").join("H"),
});
