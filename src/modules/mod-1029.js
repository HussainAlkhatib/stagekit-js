'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1029",
  name: "Replace \"e\" with \"f\"",
  description: "Replaces every e with f.",
  run: (value) => String(value).split("e").join("f"),
});
