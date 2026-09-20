'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3370",
  name: "Replace \"O\" with \"2\"",
  description: "Replaces every O with 2.",
  run: (value) => String(value).split("O").join("2"),
});
