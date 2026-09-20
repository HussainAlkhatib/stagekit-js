'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0465",
  name: "Replace \"b\" with \"f\"",
  description: "Replaces every b with f.",
  run: (value) => String(value).split("b").join("f"),
});
