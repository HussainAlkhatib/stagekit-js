'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1500",
  name: "Replace \"k\" with \"o\"",
  description: "Replaces every k with o.",
  run: (value) => String(value).split("k").join("o"),
});
