'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2290",
  name: "Replace \"x\" with \"k\"",
  description: "Replaces every x with k.",
  run: (value) => String(value).split("x").join("k"),
});
