'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3231",
  name: "Replace \"M\" with \"K\"",
  description: "Replaces every M with K.",
  run: (value) => String(value).split("M").join("K"),
});
