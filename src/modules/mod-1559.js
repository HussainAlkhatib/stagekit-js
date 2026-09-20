'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1559",
  name: "Replace \"l\" with \"m\"",
  description: "Replaces every l with m.",
  run: (value) => String(value).split("l").join("m"),
});
