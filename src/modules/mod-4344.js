'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4344",
  name: "Replace \"4\" with \"Z\"",
  description: "Replaces every 4 with Z.",
  run: (value) => String(value).split("4").join("Z"),
});
