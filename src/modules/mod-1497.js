'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1497",
  name: "Replace \"k\" with \"l\"",
  description: "Replaces every k with l.",
  run: (value) => String(value).split("k").join("l"),
});
