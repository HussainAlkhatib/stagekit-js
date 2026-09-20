'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1761",
  name: "Replace \"o\" with \"F\"",
  description: "Replaces every o with F.",
  run: (value) => String(value).split("o").join("F"),
});
