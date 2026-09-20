'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1524",
  name: "Replace \"k\" with \"M\"",
  description: "Replaces every k with M.",
  run: (value) => String(value).split("k").join("M"),
});
