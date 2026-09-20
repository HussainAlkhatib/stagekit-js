'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3354",
  name: "Replace \"O\" with \"L\"",
  description: "Replaces every O with L.",
  run: (value) => String(value).split("O").join("L"),
});
