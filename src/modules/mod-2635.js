'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2635",
  name: "Replace \"C\" with \"Z\"",
  description: "Replaces every C with Z.",
  run: (value) => String(value).split("C").join("Z"),
});
