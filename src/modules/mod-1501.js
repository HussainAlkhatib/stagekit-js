'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1501",
  name: "Replace \"k\" with \"p\"",
  description: "Replaces every k with p.",
  run: (value) => String(value).split("k").join("p"),
});
