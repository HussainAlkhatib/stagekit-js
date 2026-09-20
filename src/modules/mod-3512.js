'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3512",
  name: "Replace \"R\" with \"m\"",
  description: "Replaces every R with m.",
  run: (value) => String(value).split("R").join("m"),
});
