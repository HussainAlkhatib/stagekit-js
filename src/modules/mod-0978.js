'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0978",
  name: "Replace \"d\" with \"X\"",
  description: "Replaces every d with X.",
  run: (value) => String(value).split("d").join("X"),
});
