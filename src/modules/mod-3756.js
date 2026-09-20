'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3756",
  name: "Replace \"V\" with \"m\"",
  description: "Replaces every V with m.",
  run: (value) => String(value).split("V").join("m"),
});
