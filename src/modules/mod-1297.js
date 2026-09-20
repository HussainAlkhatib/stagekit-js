'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1297",
  name: "Replace \"g\" with \"3\"",
  description: "Replaces every g with 3.",
  run: (value) => String(value).split("g").join("3"),
});
