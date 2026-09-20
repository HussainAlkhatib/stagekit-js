'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2999",
  name: "Replace \"I\" with \"X\"",
  description: "Replaces every I with X.",
  run: (value) => String(value).split("I").join("X"),
});
