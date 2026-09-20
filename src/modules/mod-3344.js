'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3344",
  name: "Replace \"O\" with \"B\"",
  description: "Replaces every O with B.",
  run: (value) => String(value).split("O").join("B"),
});
