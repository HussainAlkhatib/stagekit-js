'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2353",
  name: "Replace \"y\" with \"m\"",
  description: "Replaces every y with m.",
  run: (value) => String(value).split("y").join("m"),
});
