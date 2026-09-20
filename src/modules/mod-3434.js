'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3434",
  name: "Replace \"P\" with \"5\"",
  description: "Replaces every P with 5.",
  run: (value) => String(value).split("P").join("5"),
});
