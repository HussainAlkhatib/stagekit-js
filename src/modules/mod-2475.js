'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2475",
  name: "Replace \"A\" with \"m\"",
  description: "Replaces every A with m.",
  run: (value) => String(value).split("A").join("m"),
});
