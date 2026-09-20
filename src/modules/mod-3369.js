'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3369",
  name: "Replace \"O\" with \"1\"",
  description: "Replaces every O with 1.",
  run: (value) => String(value).split("O").join("1"),
});
