'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2170",
  name: "Replace \"v\" with \"m\"",
  description: "Replaces every v with m.",
  run: (value) => String(value).split("v").join("m"),
});
