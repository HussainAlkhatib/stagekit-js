'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3361",
  name: "Replace \"O\" with \"T\"",
  description: "Replaces every O with T.",
  run: (value) => String(value).split("O").join("T"),
});
