'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0582",
  name: "Replace \"b\" with \"N\"",
  description: "Replaces every b with N.",
  run: (value) => String(value).split("b").join("N"),
});
