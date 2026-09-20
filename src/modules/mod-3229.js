'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3229",
  name: "Replace \"M\" with \"I\"",
  description: "Replaces every M with I.",
  run: (value) => String(value).split("M").join("I"),
});
