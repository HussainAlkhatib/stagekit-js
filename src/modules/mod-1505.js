'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1505",
  name: "Replace \"k\" with \"t\"",
  description: "Replaces every k with t.",
  run: (value) => String(value).split("k").join("t"),
});
