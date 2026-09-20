'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4603",
  name: "Replace \"9\" with \"f\"",
  description: "Replaces every 9 with f.",
  run: (value) => String(value).split("9").join("f"),
});
