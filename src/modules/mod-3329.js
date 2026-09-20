'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3329",
  name: "Replace \"O\" with \"m\"",
  description: "Replaces every O with m.",
  run: (value) => String(value).split("O").join("m"),
});
