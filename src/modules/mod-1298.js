'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1298",
  name: "Replace \"g\" with \"4\"",
  description: "Replaces every g with 4.",
  run: (value) => String(value).split("g").join("4"),
});
