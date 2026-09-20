'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1675",
  name: "Replace \"n\" with \"f\"",
  description: "Replaces every n with f.",
  run: (value) => String(value).split("n").join("f"),
});
