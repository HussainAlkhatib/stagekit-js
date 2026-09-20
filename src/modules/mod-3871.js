'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3871",
  name: "Replace \"X\" with \"f\"",
  description: "Replaces every X with f.",
  run: (value) => String(value).split("X").join("f"),
});
