'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4588",
  name: "Replace \"8\" with \"Z\"",
  description: "Replaces every 8 with Z.",
  run: (value) => String(value).split("8").join("Z"),
});
