'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3878",
  name: "Replace \"X\" with \"m\"",
  description: "Replaces every X with m.",
  run: (value) => String(value).split("X").join("m"),
});
