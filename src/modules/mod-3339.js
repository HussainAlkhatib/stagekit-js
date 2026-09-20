'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3339",
  name: "Replace \"O\" with \"w\"",
  description: "Replaces every O with w.",
  run: (value) => String(value).split("O").join("w"),
});
