'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4159",
  name: "Replace \"1\" with \"X\"",
  description: "Replaces every 1 with X.",
  run: (value) => String(value).split("1").join("X"),
});
