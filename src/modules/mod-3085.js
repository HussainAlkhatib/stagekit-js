'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3085",
  name: "Replace \"K\" with \"m\"",
  description: "Replaces every K with m.",
  run: (value) => String(value).split("K").join("m"),
});
