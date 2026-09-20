'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1495",
  name: "Replace \"k\" with \"i\"",
  description: "Replaces every k with i.",
  run: (value) => String(value).split("k").join("i"),
});
