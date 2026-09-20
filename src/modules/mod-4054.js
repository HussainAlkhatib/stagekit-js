'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4054",
  name: "Replace \"0\" with \"f\"",
  description: "Replaces every 0 with f.",
  run: (value) => String(value).split("0").join("f"),
});
