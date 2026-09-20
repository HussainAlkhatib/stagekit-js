'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1266",
  name: "Replace \"g\" with \"y\"",
  description: "Replaces every g with y.",
  run: (value) => String(value).split("g").join("y"),
});
