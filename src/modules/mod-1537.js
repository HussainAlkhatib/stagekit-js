'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1537",
  name: "Replace \"k\" with \"Z\"",
  description: "Replaces every k with Z.",
  run: (value) => String(value).split("k").join("Z"),
});
