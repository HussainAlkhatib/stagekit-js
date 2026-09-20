'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2584",
  name: "Replace \"B\" with \"9\"",
  description: "Replaces every B with 9.",
  run: (value) => String(value).split("B").join("9"),
});
