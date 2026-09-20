'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2308",
  name: "Replace \"x\" with \"D\"",
  description: "Replaces every x with D.",
  run: (value) => String(value).split("x").join("D"),
});
