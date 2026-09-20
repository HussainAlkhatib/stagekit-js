'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3368",
  name: "Replace \"O\" with \"0\"",
  description: "Replaces every O with 0.",
  run: (value) => String(value).split("O").join("0"),
});
