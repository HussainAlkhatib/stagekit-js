'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1248",
  name: "Replace \"g\" with \"f\"",
  description: "Replaces every g with f.",
  run: (value) => String(value).split("g").join("f"),
});
