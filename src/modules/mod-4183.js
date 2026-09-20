'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4183",
  name: "Replace \"2\" with \"m\"",
  description: "Replaces every 2 with m.",
  run: (value) => String(value).split("2").join("m"),
});
