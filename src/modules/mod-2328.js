'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2328",
  name: "Replace \"x\" with \"X\"",
  description: "Replaces every x with X.",
  run: (value) => String(value).split("x").join("X"),
});
