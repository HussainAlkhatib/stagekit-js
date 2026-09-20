'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2336",
  name: "Replace \"x\" with \"5\"",
  description: "Replaces every x with 5.",
  run: (value) => String(value).split("x").join("5"),
});
