'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2318",
  name: "Replace \"x\" with \"N\"",
  description: "Replaces every x with N.",
  run: (value) => String(value).split("x").join("N"),
});
