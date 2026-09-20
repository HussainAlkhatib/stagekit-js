'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1736",
  name: "Replace \"o\" with \"f\"",
  description: "Replaces every o with f.",
  run: (value) => String(value).split("o").join("f"),
});
