'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2562",
  name: "Replace \"B\" with \"N\"",
  description: "Replaces every B with N.",
  run: (value) => String(value).split("B").join("N"),
});
