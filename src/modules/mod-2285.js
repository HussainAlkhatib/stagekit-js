'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2285",
  name: "Replace \"x\" with \"f\"",
  description: "Replaces every x with f.",
  run: (value) => String(value).split("x").join("f"),
});
