'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3202",
  name: "Replace \"M\" with \"h\"",
  description: "Replaces every M with h.",
  run: (value) => String(value).split("M").join("h"),
});
