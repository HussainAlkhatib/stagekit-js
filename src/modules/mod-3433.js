'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3433",
  name: "Replace \"P\" with \"4\"",
  description: "Replaces every P with 4.",
  run: (value) => String(value).split("P").join("4"),
});
