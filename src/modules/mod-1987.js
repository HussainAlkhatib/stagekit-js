'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1987",
  name: "Replace \"s\" with \"m\"",
  description: "Replaces every s with m.",
  run: (value) => String(value).split("s").join("m"),
});
