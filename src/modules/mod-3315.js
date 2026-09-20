'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3315",
  name: "Replace \"N\" with \"8\"",
  description: "Replaces every N with 8.",
  run: (value) => String(value).split("N").join("8"),
});
