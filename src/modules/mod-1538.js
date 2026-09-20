'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1538",
  name: "Replace \"k\" with \"0\"",
  description: "Replaces every k with 0.",
  run: (value) => String(value).split("k").join("0"),
});
