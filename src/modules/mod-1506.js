'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1506",
  name: "Replace \"k\" with \"u\"",
  description: "Replaces every k with u.",
  run: (value) => String(value).split("k").join("u"),
});
