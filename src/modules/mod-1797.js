'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1797",
  name: "Replace \"p\" with \"f\"",
  description: "Replaces every p with f.",
  run: (value) => String(value).split("p").join("f"),
});
