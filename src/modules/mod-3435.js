'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3435",
  name: "Replace \"P\" with \"6\"",
  description: "Replaces every P with 6.",
  run: (value) => String(value).split("P").join("6"),
});
