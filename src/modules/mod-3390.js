'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3390",
  name: "Replace \"P\" with \"m\"",
  description: "Replaces every P with m.",
  run: (value) => String(value).split("P").join("m"),
});
