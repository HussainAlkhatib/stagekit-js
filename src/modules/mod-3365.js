'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3365",
  name: "Replace \"O\" with \"X\"",
  description: "Replaces every O with X.",
  run: (value) => String(value).split("O").join("X"),
});
