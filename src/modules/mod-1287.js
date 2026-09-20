'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1287",
  name: "Replace \"g\" with \"T\"",
  description: "Replaces every g with T.",
  run: (value) => String(value).split("g").join("T"),
});
