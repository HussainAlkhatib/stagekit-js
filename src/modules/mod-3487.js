'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3487",
  name: "Replace \"Q\" with \"X\"",
  description: "Replaces every Q with X.",
  run: (value) => String(value).split("Q").join("X"),
});
