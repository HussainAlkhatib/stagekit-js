'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3024",
  name: "Replace \"J\" with \"m\"",
  description: "Replaces every J with m.",
  run: (value) => String(value).split("J").join("m"),
});
