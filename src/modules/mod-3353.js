'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3353",
  name: "Replace \"O\" with \"K\"",
  description: "Replaces every O with K.",
  run: (value) => String(value).split("O").join("K"),
});
