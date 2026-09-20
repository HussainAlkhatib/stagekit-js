'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3243",
  name: "Replace \"M\" with \"X\"",
  description: "Replaces every M with X.",
  run: (value) => String(value).split("M").join("X"),
});
