'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1790",
  name: "Replace \"o\" with \"8\"",
  description: "Replaces every o with 8.",
  run: (value) => String(value).split("o").join("8"),
});
