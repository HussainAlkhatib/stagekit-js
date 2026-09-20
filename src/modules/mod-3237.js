'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3237",
  name: "Replace \"M\" with \"R\"",
  description: "Replaces every M with R.",
  run: (value) => String(value).split("M").join("R"),
});
