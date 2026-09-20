'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1511",
  name: "Replace \"k\" with \"z\"",
  description: "Replaces every k with z.",
  run: (value) => String(value).split("k").join("z"),
});
