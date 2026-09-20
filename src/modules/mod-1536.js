'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1536",
  name: "Replace \"k\" with \"Y\"",
  description: "Replaces every k with Y.",
  run: (value) => String(value).split("k").join("Y"),
});
