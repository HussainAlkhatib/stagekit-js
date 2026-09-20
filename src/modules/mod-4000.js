'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4000",
  name: "Replace \"Z\" with \"m\"",
  description: "Replaces every Z with m.",
  run: (value) => String(value).split("Z").join("m"),
});
