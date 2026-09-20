'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2529",
  name: "Replace \"B\" with \"f\"",
  description: "Replaces every B with f.",
  run: (value) => String(value).split("B").join("f"),
});
