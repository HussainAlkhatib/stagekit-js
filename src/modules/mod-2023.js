'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2023",
  name: "Replace \"s\" with \"X\"",
  description: "Replaces every s with X.",
  run: (value) => String(value).split("s").join("X"),
});
