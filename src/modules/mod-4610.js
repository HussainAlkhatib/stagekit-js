'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4610",
  name: "Replace \"9\" with \"m\"",
  description: "Replaces every 9 with m.",
  run: (value) => String(value).split("9").join("m"),
});
