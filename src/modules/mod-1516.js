'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1516",
  name: "Replace \"k\" with \"E\"",
  description: "Replaces every k with E.",
  run: (value) => String(value).split("k").join("E"),
});
