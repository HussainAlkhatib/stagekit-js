'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3245",
  name: "Replace \"M\" with \"Z\"",
  description: "Replaces every M with Z.",
  run: (value) => String(value).split("M").join("Z"),
});
