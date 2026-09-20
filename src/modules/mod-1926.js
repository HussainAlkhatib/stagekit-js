'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1926",
  name: "Replace \"r\" with \"m\"",
  description: "Replaces every r with m.",
  run: (value) => String(value).split("r").join("m"),
});
