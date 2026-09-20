'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3222",
  name: "Replace \"M\" with \"B\"",
  description: "Replaces every M with B.",
  run: (value) => String(value).split("M").join("B"),
});
