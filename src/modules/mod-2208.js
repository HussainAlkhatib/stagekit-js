'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2208",
  name: "Replace \"v\" with \"Z\"",
  description: "Replaces every v with Z.",
  run: (value) => String(value).split("v").join("Z"),
});
