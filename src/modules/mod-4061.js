'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4061",
  name: "Replace \"0\" with \"m\"",
  description: "Replaces every 0 with m.",
  run: (value) => String(value).split("0").join("m"),
});
