'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2597",
  name: "Replace \"C\" with \"m\"",
  description: "Replaces every C with m.",
  run: (value) => String(value).split("C").join("m"),
});
