'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2320",
  name: "Replace \"x\" with \"P\"",
  description: "Replaces every x with P.",
  run: (value) => String(value).split("x").join("P"),
});
