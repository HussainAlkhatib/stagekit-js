'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3749",
  name: "Replace \"V\" with \"f\"",
  description: "Replaces every V with f.",
  run: (value) => String(value).split("V").join("f"),
});
