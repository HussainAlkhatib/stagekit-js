'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1303",
  name: "Replace \"g\" with \"9\"",
  description: "Replaces every g with 9.",
  run: (value) => String(value).split("g").join("9"),
});
