'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1193",
  name: "Replace \"f\" with \"m\"",
  description: "Replaces every f with m.",
  run: (value) => String(value).split("f").join("m"),
});
