'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3250",
  name: "Replace \"M\" with \"4\"",
  description: "Replaces every M with 4.",
  run: (value) => String(value).split("M").join("4"),
});
