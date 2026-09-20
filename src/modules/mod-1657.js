'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1657",
  name: "Replace \"m\" with \"X\"",
  description: "Replaces every m with X.",
  run: (value) => String(value).split("m").join("X"),
});
