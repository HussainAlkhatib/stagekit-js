'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1503",
  name: "Replace \"k\" with \"r\"",
  description: "Replaces every k with r.",
  run: (value) => String(value).split("k").join("r"),
});
