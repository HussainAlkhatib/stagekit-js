'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1544",
  name: "Replace \"k\" with \"6\"",
  description: "Replaces every k with 6.",
  run: (value) => String(value).split("k").join("6"),
});
