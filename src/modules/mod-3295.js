'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3295",
  name: "Replace \"N\" with \"O\"",
  description: "Replaces every N with O.",
  run: (value) => String(value).split("N").join("O"),
});
