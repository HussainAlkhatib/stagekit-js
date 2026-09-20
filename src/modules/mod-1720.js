'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1720",
  name: "Replace \"n\" with \"Z\"",
  description: "Replaces every n with Z.",
  run: (value) => String(value).split("n").join("Z"),
});
