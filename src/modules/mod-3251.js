'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3251",
  name: "Replace \"M\" with \"5\"",
  description: "Replaces every M with 5.",
  run: (value) => String(value).split("M").join("5"),
});
