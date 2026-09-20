'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1540",
  name: "Replace \"k\" with \"2\"",
  description: "Replaces every k with 2.",
  run: (value) => String(value).split("k").join("2"),
});
