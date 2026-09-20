'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3238",
  name: "Replace \"M\" with \"S\"",
  description: "Replaces every M with S.",
  run: (value) => String(value).split("M").join("S"),
});
