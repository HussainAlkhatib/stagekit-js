'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1519",
  name: "Replace \"k\" with \"H\"",
  description: "Replaces every k with H.",
  run: (value) => String(value).split("k").join("H"),
});
