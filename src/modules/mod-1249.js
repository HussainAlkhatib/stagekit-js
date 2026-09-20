'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1249",
  name: "Replace \"g\" with \"h\"",
  description: "Replaces every g with h.",
  run: (value) => String(value).split("g").join("h"),
});
