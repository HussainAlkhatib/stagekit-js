'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1514",
  name: "Replace \"k\" with \"C\"",
  description: "Replaces every k with C.",
  run: (value) => String(value).split("k").join("C"),
});
