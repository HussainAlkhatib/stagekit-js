'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2330",
  name: "Replace \"x\" with \"Z\"",
  description: "Replaces every x with Z.",
  run: (value) => String(value).split("x").join("Z"),
});
