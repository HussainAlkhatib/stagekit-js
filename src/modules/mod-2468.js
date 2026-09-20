'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2468",
  name: "Replace \"A\" with \"f\"",
  description: "Replaces every A with f.",
  run: (value) => String(value).split("A").join("f"),
});
