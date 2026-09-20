'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4488",
  name: "Replace \"7\" with \"m\"",
  description: "Replaces every 7 with m.",
  run: (value) => String(value).split("7").join("m"),
});
