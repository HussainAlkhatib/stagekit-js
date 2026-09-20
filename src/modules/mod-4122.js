'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4122",
  name: "Replace \"1\" with \"m\"",
  description: "Replaces every 1 with m.",
  run: (value) => String(value).split("1").join("m"),
});
