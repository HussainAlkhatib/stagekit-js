'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2391",
  name: "Replace \"y\" with \"Z\"",
  description: "Replaces every y with Z.",
  run: (value) => String(value).split("y").join("Z"),
});
