'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3411",
  name: "Replace \"P\" with \"H\"",
  description: "Replaces every P with H.",
  run: (value) => String(value).split("P").join("H"),
});
