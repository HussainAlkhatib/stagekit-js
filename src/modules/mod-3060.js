'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3060",
  name: "Replace \"J\" with \"X\"",
  description: "Replaces every J with X.",
  run: (value) => String(value).split("J").join("X"),
});
