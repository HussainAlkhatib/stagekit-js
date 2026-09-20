'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4220",
  name: "Replace \"2\" with \"X\"",
  description: "Replaces every 2 with X.",
  run: (value) => String(value).split("2").join("X"),
});
