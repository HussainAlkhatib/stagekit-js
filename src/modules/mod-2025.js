'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2025",
  name: "Replace \"s\" with \"Z\"",
  description: "Replaces every s with Z.",
  run: (value) => String(value).split("s").join("Z"),
});
