'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3374",
  name: "Replace \"O\" with \"6\"",
  description: "Replaces every O with 6.",
  run: (value) => String(value).split("O").join("6"),
});
