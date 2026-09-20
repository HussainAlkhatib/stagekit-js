'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3348",
  name: "Replace \"O\" with \"F\"",
  description: "Replaces every O with F.",
  run: (value) => String(value).split("O").join("F"),
});
