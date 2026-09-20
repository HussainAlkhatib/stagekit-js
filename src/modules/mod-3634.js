'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3634",
  name: "Replace \"T\" with \"m\"",
  description: "Replaces every T with m.",
  run: (value) => String(value).split("T").join("m"),
});
