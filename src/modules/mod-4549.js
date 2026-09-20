'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4549",
  name: "Replace \"8\" with \"m\"",
  description: "Replaces every 8 with m.",
  run: (value) => String(value).split("8").join("m"),
});
