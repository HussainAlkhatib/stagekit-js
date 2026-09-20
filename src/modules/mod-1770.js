'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1770",
  name: "Replace \"o\" with \"O\"",
  description: "Replaces every o with O.",
  run: (value) => String(value).split("o").join("O"),
});
