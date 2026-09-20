'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1766",
  name: "Replace \"o\" with \"K\"",
  description: "Replaces every o with K.",
  run: (value) => String(value).split("o").join("K"),
});
