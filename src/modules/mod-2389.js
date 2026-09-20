'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2389",
  name: "Replace \"y\" with \"X\"",
  description: "Replaces every y with X.",
  run: (value) => String(value).split("y").join("X"),
});
