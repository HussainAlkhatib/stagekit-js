'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3205",
  name: "Replace \"M\" with \"k\"",
  description: "Replaces every M with k.",
  run: (value) => String(value).split("M").join("k"),
});
