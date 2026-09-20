'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1492",
  name: "Replace \"k\" with \"f\"",
  description: "Replaces every k with f.",
  run: (value) => String(value).split("k").join("f"),
});
