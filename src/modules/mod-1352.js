'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1352",
  name: "Replace \"h\" with \"X\"",
  description: "Replaces every h with X.",
  run: (value) => String(value).split("h").join("X"),
});
