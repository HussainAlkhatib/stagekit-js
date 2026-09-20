'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1494",
  name: "Replace \"k\" with \"h\"",
  description: "Replaces every k with h.",
  run: (value) => String(value).split("k").join("h"),
});
