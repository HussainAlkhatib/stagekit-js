'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3252",
  name: "Replace \"M\" with \"6\"",
  description: "Replaces every M with 6.",
  run: (value) => String(value).split("M").join("6"),
});
