'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3232",
  name: "Replace \"M\" with \"L\"",
  description: "Replaces every M with L.",
  run: (value) => String(value).split("M").join("L"),
});
