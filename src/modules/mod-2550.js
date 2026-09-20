'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2550",
  name: "Replace \"B\" with \"A\"",
  description: "Replaces every B with A.",
  run: (value) => String(value).split("B").join("A"),
});
