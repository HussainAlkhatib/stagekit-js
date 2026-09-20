'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0397",
  name: "Replace \"a\" with \"X\"",
  description: "Replaces every a with X.",
  run: (value) => String(value).split("a").join("X"),
});
