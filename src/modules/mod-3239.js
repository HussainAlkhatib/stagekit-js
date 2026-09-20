'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3239",
  name: "Replace \"M\" with \"T\"",
  description: "Replaces every M with T.",
  run: (value) => String(value).split("M").join("T"),
});
