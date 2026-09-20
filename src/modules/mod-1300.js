'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1300",
  name: "Replace \"g\" with \"6\"",
  description: "Replaces every g with 6.",
  run: (value) => String(value).split("g").join("6"),
});
