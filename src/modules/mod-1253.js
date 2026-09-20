'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1253",
  name: "Replace \"g\" with \"l\"",
  description: "Replaces every g with l.",
  run: (value) => String(value).split("g").join("l"),
});
