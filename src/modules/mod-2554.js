'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2554",
  name: "Replace \"B\" with \"F\"",
  description: "Replaces every B with F.",
  run: (value) => String(value).split("B").join("F"),
});
