'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2895",
  name: "Replace \"H\" with \"f\"",
  description: "Replaces every H with f.",
  run: (value) => String(value).split("H").join("f"),
});
