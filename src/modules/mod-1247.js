'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1247",
  name: "Replace \"g\" with \"e\"",
  description: "Replaces every g with e.",
  run: (value) => String(value).split("g").join("e"),
});
