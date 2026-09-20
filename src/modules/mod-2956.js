'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2956",
  name: "Replace \"I\" with \"f\"",
  description: "Replaces every I with f.",
  run: (value) => String(value).split("I").join("f"),
});
