'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3017",
  name: "Replace \"J\" with \"f\"",
  description: "Replaces every J with f.",
  run: (value) => String(value).split("J").join("f"),
});
