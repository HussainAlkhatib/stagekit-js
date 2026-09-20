'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2311",
  name: "Replace \"x\" with \"G\"",
  description: "Replaces every x with G.",
  run: (value) => String(value).split("x").join("G"),
});
