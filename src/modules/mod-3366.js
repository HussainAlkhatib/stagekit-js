'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3366",
  name: "Replace \"O\" with \"Y\"",
  description: "Replaces every O with Y.",
  run: (value) => String(value).split("O").join("Y"),
});
