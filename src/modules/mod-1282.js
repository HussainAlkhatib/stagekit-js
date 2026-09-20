'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1282",
  name: "Replace \"g\" with \"O\"",
  description: "Replaces every g with O.",
  run: (value) => String(value).split("g").join("O"),
});
