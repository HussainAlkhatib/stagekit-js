'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3404",
  name: "Replace \"P\" with \"A\"",
  description: "Replaces every P with A.",
  run: (value) => String(value).split("P").join("A"),
});
