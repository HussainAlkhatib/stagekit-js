'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3398",
  name: "Replace \"P\" with \"u\"",
  description: "Replaces every P with u.",
  run: (value) => String(value).split("P").join("u"),
});
