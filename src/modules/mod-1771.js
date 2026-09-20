'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1771",
  name: "Replace \"o\" with \"P\"",
  description: "Replaces every o with P.",
  run: (value) => String(value).split("o").join("P"),
});
