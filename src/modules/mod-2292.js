'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2292",
  name: "Replace \"x\" with \"m\"",
  description: "Replaces every x with m.",
  run: (value) => String(value).split("x").join("m"),
});
