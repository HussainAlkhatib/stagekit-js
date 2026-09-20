'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3323",
  name: "Replace \"O\" with \"g\"",
  description: "Replaces every O with g.",
  run: (value) => String(value).split("O").join("g"),
});
