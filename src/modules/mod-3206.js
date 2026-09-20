'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3206",
  name: "Replace \"M\" with \"l\"",
  description: "Replaces every M with l.",
  run: (value) => String(value).split("M").join("l"),
});
