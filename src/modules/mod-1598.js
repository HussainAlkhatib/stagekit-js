'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1598",
  name: "Replace \"l\" with \"Z\"",
  description: "Replaces every l with Z.",
  run: (value) => String(value).split("l").join("Z"),
});
