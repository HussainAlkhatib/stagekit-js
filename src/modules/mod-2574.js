'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2574",
  name: "Replace \"B\" with \"Z\"",
  description: "Replaces every B with Z.",
  run: (value) => String(value).split("B").join("Z"),
});
