'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2319",
  name: "Replace \"x\" with \"O\"",
  description: "Replaces every x with O.",
  run: (value) => String(value).split("x").join("O"),
});
