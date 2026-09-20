'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1718",
  name: "Replace \"n\" with \"X\"",
  description: "Replaces every n with X.",
  run: (value) => String(value).split("n").join("X"),
});
