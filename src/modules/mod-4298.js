'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4298",
  name: "Replace \"4\" with \"f\"",
  description: "Replaces every 4 with f.",
  run: (value) => String(value).split("4").join("f"),
});
