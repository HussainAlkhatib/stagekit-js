'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3688",
  name: "Replace \"U\" with \"f\"",
  description: "Replaces every U with f.",
  run: (value) => String(value).split("U").join("f"),
});
