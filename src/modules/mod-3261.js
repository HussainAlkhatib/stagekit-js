'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3261",
  name: "Replace \"N\" with \"f\"",
  description: "Replaces every N with f.",
  run: (value) => String(value).split("N").join("f"),
});
