'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4305",
  name: "Replace \"4\" with \"m\"",
  description: "Replaces every 4 with m.",
  run: (value) => String(value).split("4").join("m"),
});
