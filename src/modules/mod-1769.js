'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1769",
  name: "Replace \"o\" with \"N\"",
  description: "Replaces every o with N.",
  run: (value) => String(value).split("o").join("N"),
});
