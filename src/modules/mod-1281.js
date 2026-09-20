'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1281",
  name: "Replace \"g\" with \"N\"",
  description: "Replaces every g with N.",
  run: (value) => String(value).split("g").join("N"),
});
