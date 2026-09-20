'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3236",
  name: "Replace \"M\" with \"Q\"",
  description: "Replaces every M with Q.",
  run: (value) => String(value).split("M").join("Q"),
});
