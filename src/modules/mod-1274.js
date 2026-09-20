'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1274",
  name: "Replace \"g\" with \"G\"",
  description: "Replaces every g with G.",
  run: (value) => String(value).split("g").join("G"),
});
