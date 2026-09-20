'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1292",
  name: "Replace \"g\" with \"Y\"",
  description: "Replaces every g with Y.",
  run: (value) => String(value).split("g").join("Y"),
});
