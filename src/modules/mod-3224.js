'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3224",
  name: "Replace \"M\" with \"D\"",
  description: "Replaces every M with D.",
  run: (value) => String(value).split("M").join("D"),
});
