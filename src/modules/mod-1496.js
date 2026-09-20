'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1496",
  name: "Replace \"k\" with \"j\"",
  description: "Replaces every k with j.",
  run: (value) => String(value).split("k").join("j"),
});
