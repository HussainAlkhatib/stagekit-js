'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1302",
  name: "Replace \"g\" with \"8\"",
  description: "Replaces every g with 8.",
  run: (value) => String(value).split("g").join("8"),
});
