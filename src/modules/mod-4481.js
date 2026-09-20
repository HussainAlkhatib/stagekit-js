'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4481",
  name: "Replace \"7\" with \"f\"",
  description: "Replaces every 7 with f.",
  run: (value) => String(value).split("7").join("f"),
});
