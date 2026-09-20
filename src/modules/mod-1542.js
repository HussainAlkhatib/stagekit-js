'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1542",
  name: "Replace \"k\" with \"4\"",
  description: "Replaces every k with 4.",
  run: (value) => String(value).split("k").join("4"),
});
