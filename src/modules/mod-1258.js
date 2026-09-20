'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1258",
  name: "Replace \"g\" with \"q\"",
  description: "Replaces every g with q.",
  run: (value) => String(value).split("g").join("q"),
});
