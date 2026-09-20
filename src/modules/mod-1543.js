'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1543",
  name: "Replace \"k\" with \"5\"",
  description: "Replaces every k with 5.",
  run: (value) => String(value).split("k").join("5"),
});
