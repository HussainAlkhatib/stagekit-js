'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3321",
  name: "Replace \"O\" with \"e\"",
  description: "Replaces every O with e.",
  run: (value) => String(value).split("O").join("e"),
});
