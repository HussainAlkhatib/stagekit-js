'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3505",
  name: "Replace \"R\" with \"f\"",
  description: "Replaces every R with f.",
  run: (value) => String(value).split("R").join("f"),
});
