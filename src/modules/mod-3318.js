'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3318",
  name: "Replace \"O\" with \"b\"",
  description: "Replaces every O with b.",
  run: (value) => String(value).split("O").join("b"),
});
