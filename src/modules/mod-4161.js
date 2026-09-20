'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4161",
  name: "Replace \"1\" with \"Z\"",
  description: "Replaces every 1 with Z.",
  run: (value) => String(value).split("1").join("Z"),
});
