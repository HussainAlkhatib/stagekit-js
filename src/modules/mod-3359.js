'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3359",
  name: "Replace \"O\" with \"R\"",
  description: "Replaces every O with R.",
  run: (value) => String(value).split("O").join("R"),
});
