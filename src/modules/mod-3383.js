'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3383",
  name: "Replace \"P\" with \"f\"",
  description: "Replaces every P with f.",
  run: (value) => String(value).split("P").join("f"),
});
