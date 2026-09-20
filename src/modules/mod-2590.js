'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2590",
  name: "Replace \"C\" with \"f\"",
  description: "Replaces every C with f.",
  run: (value) => String(value).split("C").join("f"),
});
