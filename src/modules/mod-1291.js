'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1291",
  name: "Replace \"g\" with \"X\"",
  description: "Replaces every g with X.",
  run: (value) => String(value).split("g").join("X"),
});
