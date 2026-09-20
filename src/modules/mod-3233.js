'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3233",
  name: "Replace \"M\" with \"N\"",
  description: "Replaces every M with N.",
  run: (value) => String(value).split("M").join("N"),
});
