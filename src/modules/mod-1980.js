'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1980",
  name: "Replace \"s\" with \"f\"",
  description: "Replaces every s with f.",
  run: (value) => String(value).split("s").join("f"),
});
