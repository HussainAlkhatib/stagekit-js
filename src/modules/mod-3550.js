'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3550",
  name: "Replace \"R\" with \"Z\"",
  description: "Replaces every R with Z.",
  run: (value) => String(value).split("R").join("Z"),
});
