'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3255",
  name: "Replace \"M\" with \"9\"",
  description: "Replaces every M with 9.",
  run: (value) => String(value).split("M").join("9"),
});
