'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3373",
  name: "Replace \"O\" with \"5\"",
  description: "Replaces every O with 5.",
  run: (value) => String(value).split("O").join("5"),
});
