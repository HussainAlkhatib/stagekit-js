'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3409",
  name: "Replace \"P\" with \"F\"",
  description: "Replaces every P with F.",
  run: (value) => String(value).split("P").join("F"),
});
