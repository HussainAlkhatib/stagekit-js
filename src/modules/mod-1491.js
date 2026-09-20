'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1491",
  name: "Replace \"k\" with \"e\"",
  description: "Replaces every k with e.",
  run: (value) => String(value).split("k").join("e"),
});
