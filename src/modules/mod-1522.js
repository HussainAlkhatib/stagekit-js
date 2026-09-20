'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1522",
  name: "Replace \"k\" with \"K\"",
  description: "Replaces every k with K.",
  run: (value) => String(value).split("k").join("K"),
});
