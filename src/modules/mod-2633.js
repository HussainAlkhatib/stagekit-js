'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2633",
  name: "Replace \"C\" with \"X\"",
  description: "Replaces every C with X.",
  run: (value) => String(value).split("C").join("X"),
});
