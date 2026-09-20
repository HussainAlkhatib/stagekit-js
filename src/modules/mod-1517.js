'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1517",
  name: "Replace \"k\" with \"F\"",
  description: "Replaces every k with F.",
  run: (value) => String(value).split("k").join("F"),
});
