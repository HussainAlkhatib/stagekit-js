'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1263",
  name: "Replace \"g\" with \"v\"",
  description: "Replaces every g with v.",
  run: (value) => String(value).split("g").join("v"),
});
