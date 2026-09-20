'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3284",
  name: "Replace \"N\" with \"C\"",
  description: "Replaces every N with C.",
  run: (value) => String(value).split("N").join("C"),
});
