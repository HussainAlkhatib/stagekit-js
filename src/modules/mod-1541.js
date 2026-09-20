'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1541",
  name: "Replace \"k\" with \"3\"",
  description: "Replaces every k with 3.",
  run: (value) => String(value).split("k").join("3"),
});
