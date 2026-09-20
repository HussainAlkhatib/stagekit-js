'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1791",
  name: "Replace \"o\" with \"9\"",
  description: "Replaces every o with 9.",
  run: (value) => String(value).split("o").join("9"),
});
