'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3345",
  name: "Replace \"O\" with \"C\"",
  description: "Replaces every O with C.",
  run: (value) => String(value).split("O").join("C"),
});
