'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3548",
  name: "Replace \"R\" with \"X\"",
  description: "Replaces every R with X.",
  run: (value) => String(value).split("R").join("X"),
});
