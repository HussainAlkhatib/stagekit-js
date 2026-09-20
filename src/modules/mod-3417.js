'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3417",
  name: "Replace \"P\" with \"N\"",
  description: "Replaces every P with N.",
  run: (value) => String(value).split("P").join("N"),
});
