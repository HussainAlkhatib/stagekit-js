'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3332",
  name: "Replace \"O\" with \"p\"",
  description: "Replaces every O with p.",
  run: (value) => String(value).split("O").join("p"),
});
