'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1788",
  name: "Replace \"o\" with \"6\"",
  description: "Replaces every o with 6.",
  run: (value) => String(value).split("o").join("6"),
});
