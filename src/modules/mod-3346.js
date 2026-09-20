'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3346",
  name: "Replace \"O\" with \"D\"",
  description: "Replaces every O with D.",
  run: (value) => String(value).split("O").join("D"),
});
