'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3226",
  name: "Replace \"M\" with \"F\"",
  description: "Replaces every M with F.",
  run: (value) => String(value).split("M").join("F"),
});
