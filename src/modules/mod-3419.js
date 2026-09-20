'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3419",
  name: "Replace \"P\" with \"Q\"",
  description: "Replaces every P with Q.",
  run: (value) => String(value).split("P").join("Q"),
});
