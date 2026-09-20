'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1296",
  name: "Replace \"g\" with \"2\"",
  description: "Replaces every g with 2.",
  run: (value) => String(value).split("g").join("2"),
});
