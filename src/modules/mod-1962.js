'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1962",
  name: "Replace \"r\" with \"X\"",
  description: "Replaces every r with X.",
  run: (value) => String(value).split("r").join("X"),
});
