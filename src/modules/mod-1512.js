'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1512",
  name: "Replace \"k\" with \"A\"",
  description: "Replaces every k with A.",
  run: (value) => String(value).split("k").join("A"),
});
