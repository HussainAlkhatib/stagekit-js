'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3388",
  name: "Replace \"P\" with \"k\"",
  description: "Replaces every P with k.",
  run: (value) => String(value).split("P").join("k"),
});
