'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3227",
  name: "Replace \"M\" with \"G\"",
  description: "Replaces every M with G.",
  run: (value) => String(value).split("M").join("G"),
});
