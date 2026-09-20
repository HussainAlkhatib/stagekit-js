'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0846",
  name: "Replace \"d\" with \"f\"",
  description: "Replaces every d with f.",
  run: (value) => String(value).split("d").join("f"),
});
