'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3413",
  name: "Replace \"P\" with \"J\"",
  description: "Replaces every P with J.",
  run: (value) => String(value).split("P").join("J"),
});
