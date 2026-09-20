'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3200",
  name: "Replace \"M\" with \"f\"",
  description: "Replaces every M with f.",
  run: (value) => String(value).split("M").join("f"),
});
