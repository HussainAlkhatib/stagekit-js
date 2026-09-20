'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3376",
  name: "Replace \"O\" with \"8\"",
  description: "Replaces every O with 8.",
  run: (value) => String(value).split("O").join("8"),
});
