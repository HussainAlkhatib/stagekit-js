'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2335",
  name: "Replace \"x\" with \"4\"",
  description: "Replaces every x with 4.",
  run: (value) => String(value).split("x").join("4"),
});
