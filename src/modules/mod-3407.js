'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3407",
  name: "Replace \"P\" with \"D\"",
  description: "Replaces every P with D.",
  run: (value) => String(value).split("P").join("D"),
});
