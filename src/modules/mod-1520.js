'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1520",
  name: "Replace \"k\" with \"I\"",
  description: "Replaces every k with I.",
  run: (value) => String(value).split("k").join("I"),
});
