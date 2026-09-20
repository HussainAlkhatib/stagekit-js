'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2816",
  name: "Replace \"F\" with \"X\"",
  description: "Replaces every F with X.",
  run: (value) => String(value).split("F").join("X"),
});
