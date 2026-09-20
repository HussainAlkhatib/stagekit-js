'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1293",
  name: "Replace \"g\" with \"Z\"",
  description: "Replaces every g with Z.",
  run: (value) => String(value).split("g").join("Z"),
});
