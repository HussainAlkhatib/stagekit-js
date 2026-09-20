'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2559",
  name: "Replace \"B\" with \"K\"",
  description: "Replaces every B with K.",
  run: (value) => String(value).split("B").join("K"),
});
