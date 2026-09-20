'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3426",
  name: "Replace \"P\" with \"X\"",
  description: "Replaces every P with X.",
  run: (value) => String(value).split("P").join("X"),
});
