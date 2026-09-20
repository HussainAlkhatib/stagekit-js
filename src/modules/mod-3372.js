'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3372",
  name: "Replace \"O\" with \"4\"",
  description: "Replaces every O with 4.",
  run: (value) => String(value).split("O").join("4"),
});
