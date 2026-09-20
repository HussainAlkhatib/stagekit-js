'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3573",
  name: "Replace \"S\" with \"m\"",
  description: "Replaces every S with m.",
  run: (value) => String(value).split("S").join("m"),
});
