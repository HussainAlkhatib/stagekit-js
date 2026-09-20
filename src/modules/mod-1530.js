'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1530",
  name: "Replace \"k\" with \"S\"",
  description: "Replaces every k with S.",
  run: (value) => String(value).split("k").join("S"),
});
