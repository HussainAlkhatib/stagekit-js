'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3377",
  name: "Replace \"O\" with \"9\"",
  description: "Replaces every O with 9.",
  run: (value) => String(value).split("O").join("9"),
});
