'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2316",
  name: "Replace \"x\" with \"L\"",
  description: "Replaces every x with L.",
  run: (value) => String(value).split("x").join("L"),
});
