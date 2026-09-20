'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4115",
  name: "Replace \"1\" with \"f\"",
  description: "Replaces every 1 with f.",
  run: (value) => String(value).split("1").join("f"),
});
