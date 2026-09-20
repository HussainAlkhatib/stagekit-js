'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1286",
  name: "Replace \"g\" with \"S\"",
  description: "Replaces every g with S.",
  run: (value) => String(value).split("g").join("S"),
});
