'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3420",
  name: "Replace \"P\" with \"R\"",
  description: "Replaces every P with R.",
  run: (value) => String(value).split("P").join("R"),
});
