'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1161",
  name: "Replace \"e\" with \"X\"",
  description: "Replaces every e with X.",
  run: (value) => String(value).split("e").join("X"),
});
