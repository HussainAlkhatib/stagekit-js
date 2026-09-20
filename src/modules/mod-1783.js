'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1783",
  name: "Replace \"o\" with \"1\"",
  description: "Replaces every o with 1.",
  run: (value) => String(value).split("o").join("1"),
});
