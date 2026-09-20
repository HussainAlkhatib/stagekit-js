'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1515",
  name: "Replace \"k\" with \"D\"",
  description: "Replaces every k with D.",
  run: (value) => String(value).split("k").join("D"),
});
