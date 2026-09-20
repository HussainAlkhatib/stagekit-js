'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3333",
  name: "Replace \"O\" with \"q\"",
  description: "Replaces every O with q.",
  run: (value) => String(value).split("O").join("q"),
});
