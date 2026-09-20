'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1285",
  name: "Replace \"g\" with \"R\"",
  description: "Replaces every g with R.",
  run: (value) => String(value).split("g").join("R"),
});
