'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3810",
  name: "Replace \"W\" with \"f\"",
  description: "Replaces every W with f.",
  run: (value) => String(value).split("W").join("f"),
});
