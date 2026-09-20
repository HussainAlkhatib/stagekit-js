'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3322",
  name: "Replace \"O\" with \"f\"",
  description: "Replaces every O with f.",
  run: (value) => String(value).split("O").join("f"),
});
