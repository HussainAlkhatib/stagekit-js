'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3672",
  name: "Replace \"T\" with \"Z\"",
  description: "Replaces every T with Z.",
  run: (value) => String(value).split("T").join("Z"),
});
