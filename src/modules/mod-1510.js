'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1510",
  name: "Replace \"k\" with \"y\"",
  description: "Replaces every k with y.",
  run: (value) => String(value).split("k").join("y"),
});
