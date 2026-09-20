'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1273",
  name: "Replace \"g\" with \"F\"",
  description: "Replaces every g with F.",
  run: (value) => String(value).split("g").join("F"),
});
