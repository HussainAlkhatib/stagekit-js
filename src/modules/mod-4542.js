'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4542",
  name: "Replace \"8\" with \"f\"",
  description: "Replaces every 8 with f.",
  run: (value) => String(value).split("8").join("f"),
});
