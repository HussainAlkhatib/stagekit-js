'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1299",
  name: "Replace \"g\" with \"5\"",
  description: "Replaces every g with 5.",
  run: (value) => String(value).split("g").join("5"),
});
