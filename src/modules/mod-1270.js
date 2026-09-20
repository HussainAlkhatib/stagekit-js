'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1270",
  name: "Replace \"g\" with \"C\"",
  description: "Replaces every g with C.",
  run: (value) => String(value).split("g").join("C"),
});
