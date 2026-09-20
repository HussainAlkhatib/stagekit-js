'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3792",
  name: "Replace \"V\" with \"X\"",
  description: "Replaces every V with X.",
  run: (value) => String(value).split("V").join("X"),
});
