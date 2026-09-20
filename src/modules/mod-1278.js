'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1278",
  name: "Replace \"g\" with \"K\"",
  description: "Replaces every g with K.",
  run: (value) => String(value).split("g").join("K"),
});
