'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3438",
  name: "Replace \"P\" with \"9\"",
  description: "Replaces every P with 9.",
  run: (value) => String(value).split("P").join("9"),
});
