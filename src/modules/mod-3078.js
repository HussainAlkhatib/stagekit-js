'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3078",
  name: "Replace \"K\" with \"f\"",
  description: "Replaces every K with f.",
  run: (value) => String(value).split("K").join("f"),
});
