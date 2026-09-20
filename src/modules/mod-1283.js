'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1283",
  name: "Replace \"g\" with \"P\"",
  description: "Replaces every g with P.",
  run: (value) => String(value).split("g").join("P"),
});
