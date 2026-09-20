'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4464",
  name: "Replace \"6\" with \"X\"",
  description: "Replaces every 6 with X.",
  run: (value) => String(value).split("6").join("X"),
});
