'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1295",
  name: "Replace \"g\" with \"1\"",
  description: "Replaces every g with 1.",
  run: (value) => String(value).split("g").join("1"),
});
