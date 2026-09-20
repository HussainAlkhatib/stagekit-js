'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3418",
  name: "Replace \"P\" with \"O\"",
  description: "Replaces every P with O.",
  run: (value) => String(value).split("P").join("O"),
});
