'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2576",
  name: "Replace \"B\" with \"1\"",
  description: "Replaces every B with 1.",
  run: (value) => String(value).split("B").join("1"),
});
