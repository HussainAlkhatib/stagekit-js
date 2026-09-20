'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1507",
  name: "Replace \"k\" with \"v\"",
  description: "Replaces every k with v.",
  run: (value) => String(value).split("k").join("v"),
});
