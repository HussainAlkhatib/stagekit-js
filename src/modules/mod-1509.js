'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1509",
  name: "Replace \"k\" with \"x\"",
  description: "Replaces every k with x.",
  run: (value) => String(value).split("k").join("x"),
});
