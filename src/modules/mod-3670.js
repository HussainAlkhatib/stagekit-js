'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3670",
  name: "Replace \"T\" with \"X\"",
  description: "Replaces every T with X.",
  run: (value) => String(value).split("T").join("X"),
});
