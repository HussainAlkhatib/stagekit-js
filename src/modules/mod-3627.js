'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3627",
  name: "Replace \"T\" with \"f\"",
  description: "Replaces every T with f.",
  run: (value) => String(value).split("T").join("f"),
});
