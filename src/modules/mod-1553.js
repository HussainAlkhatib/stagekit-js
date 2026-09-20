'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1553",
  name: "Replace \"l\" with \"f\"",
  description: "Replaces every l with f.",
  run: (value) => String(value).split("l").join("f"),
});
