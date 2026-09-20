'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3248",
  name: "Replace \"M\" with \"2\"",
  description: "Replaces every M with 2.",
  run: (value) => String(value).split("M").join("2"),
});
