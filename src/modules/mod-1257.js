'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1257",
  name: "Replace \"g\" with \"p\"",
  description: "Replaces every g with p.",
  run: (value) => String(value).split("g").join("p"),
});
