'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1528",
  name: "Replace \"k\" with \"Q\"",
  description: "Replaces every k with Q.",
  run: (value) => String(value).split("k").join("Q"),
});
