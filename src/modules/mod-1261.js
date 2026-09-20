'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1261",
  name: "Replace \"g\" with \"t\"",
  description: "Replaces every g with t.",
  run: (value) => String(value).split("g").join("t"),
});
