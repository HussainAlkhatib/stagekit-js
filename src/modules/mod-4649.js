'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4649",
  name: "Replace \"9\" with \"Z\"",
  description: "Replaces every 9 with Z.",
  run: (value) => String(value).split("9").join("Z"),
});
