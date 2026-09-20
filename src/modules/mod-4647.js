'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4647",
  name: "Replace \"9\" with \"X\"",
  description: "Replaces every 9 with X.",
  run: (value) => String(value).split("9").join("X"),
});
