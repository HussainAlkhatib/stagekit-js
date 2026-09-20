'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1539",
  name: "Replace \"k\" with \"1\"",
  description: "Replaces every k with 1.",
  run: (value) => String(value).split("k").join("1"),
});
