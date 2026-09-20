'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2340",
  name: "Replace \"x\" with \"9\"",
  description: "Replaces every x with 9.",
  run: (value) => String(value).split("x").join("9"),
});
