'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3430",
  name: "Replace \"P\" with \"1\"",
  description: "Replaces every P with 1.",
  run: (value) => String(value).split("P").join("1"),
});
