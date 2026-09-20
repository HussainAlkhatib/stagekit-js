'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4359",
  name: "Replace \"5\" with \"f\"",
  description: "Replaces every 5 with f.",
  run: (value) => String(value).split("5").join("f"),
});
