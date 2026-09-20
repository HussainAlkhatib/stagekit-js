'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1546",
  name: "Replace \"k\" with \"8\"",
  description: "Replaces every k with 8.",
  run: (value) => String(value).split("k").join("8"),
});
