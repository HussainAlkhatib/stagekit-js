'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1502",
  name: "Replace \"k\" with \"q\"",
  description: "Replaces every k with q.",
  run: (value) => String(value).split("k").join("q"),
});
