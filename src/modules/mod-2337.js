'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2337",
  name: "Replace \"x\" with \"6\"",
  description: "Replaces every x with 6.",
  run: (value) => String(value).split("x").join("6"),
});
