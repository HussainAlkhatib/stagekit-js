'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1265",
  name: "Replace \"g\" with \"x\"",
  description: "Replaces every g with x.",
  run: (value) => String(value).split("g").join("x"),
});
