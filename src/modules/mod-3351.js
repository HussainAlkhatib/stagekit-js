'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3351",
  name: "Replace \"O\" with \"I\"",
  description: "Replaces every O with I.",
  run: (value) => String(value).split("O").join("I"),
});
