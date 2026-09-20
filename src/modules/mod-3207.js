'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3207",
  name: "Replace \"M\" with \"m\"",
  description: "Replaces every M with m.",
  run: (value) => String(value).split("M").join("m"),
});
