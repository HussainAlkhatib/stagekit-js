'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4237",
  name: "Replace \"3\" with \"f\"",
  description: "Replaces every 3 with f.",
  run: (value) => String(value).split("3").join("f"),
});
