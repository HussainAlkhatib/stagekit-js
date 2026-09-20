'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4366",
  name: "Replace \"5\" with \"m\"",
  description: "Replaces every 5 with m.",
  run: (value) => String(value).split("5").join("m"),
});
