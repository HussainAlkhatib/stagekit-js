'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3247",
  name: "Replace \"M\" with \"1\"",
  description: "Replaces every M with 1.",
  run: (value) => String(value).split("M").join("1"),
});
