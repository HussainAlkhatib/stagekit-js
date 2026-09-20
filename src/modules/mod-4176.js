'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4176",
  name: "Replace \"2\" with \"f\"",
  description: "Replaces every 2 with f.",
  run: (value) => String(value).split("2").join("f"),
});
