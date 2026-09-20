'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4420",
  name: "Replace \"6\" with \"f\"",
  description: "Replaces every 6 with f.",
  run: (value) => String(value).split("6").join("f"),
});
