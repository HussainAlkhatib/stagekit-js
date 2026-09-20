'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1529",
  name: "Replace \"k\" with \"R\"",
  description: "Replaces every k with R.",
  run: (value) => String(value).split("k").join("R"),
});
