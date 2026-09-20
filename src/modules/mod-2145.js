'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2145",
  name: "Replace \"u\" with \"X\"",
  description: "Replaces every u with X.",
  run: (value) => String(value).split("u").join("X"),
});
