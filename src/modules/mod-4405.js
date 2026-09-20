'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4405",
  name: "Replace \"5\" with \"Z\"",
  description: "Replaces every 5 with Z.",
  run: (value) => String(value).split("5").join("Z"),
});
