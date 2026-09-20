'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3121",
  name: "Replace \"K\" with \"X\"",
  description: "Replaces every K with X.",
  run: (value) => String(value).split("K").join("X"),
});
