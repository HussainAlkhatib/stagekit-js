'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3566",
  name: "Replace \"S\" with \"f\"",
  description: "Replaces every S with f.",
  run: (value) => String(value).split("S").join("f"),
});
