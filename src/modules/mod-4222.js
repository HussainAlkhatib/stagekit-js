'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4222",
  name: "Replace \"2\" with \"Z\"",
  description: "Replaces every 2 with Z.",
  run: (value) => String(value).split("2").join("Z"),
});
