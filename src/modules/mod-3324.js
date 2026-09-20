'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3324",
  name: "Replace \"O\" with \"h\"",
  description: "Replaces every O with h.",
  run: (value) => String(value).split("O").join("h"),
});
