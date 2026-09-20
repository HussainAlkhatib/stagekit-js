'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1309",
  name: "Replace \"h\" with \"f\"",
  description: "Replaces every h with f.",
  run: (value) => String(value).split("h").join("f"),
});
