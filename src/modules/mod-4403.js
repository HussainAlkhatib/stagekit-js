'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4403",
  name: "Replace \"5\" with \"X\"",
  description: "Replaces every 5 with X.",
  run: (value) => String(value).split("5").join("X"),
});
