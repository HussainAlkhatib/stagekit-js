'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3228",
  name: "Replace \"M\" with \"H\"",
  description: "Replaces every M with H.",
  run: (value) => String(value).split("M").join("H"),
});
