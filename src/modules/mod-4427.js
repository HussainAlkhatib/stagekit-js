'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4427",
  name: "Replace \"6\" with \"m\"",
  description: "Replaces every 6 with m.",
  run: (value) => String(value).split("6").join("m"),
});
