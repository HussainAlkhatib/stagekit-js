'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1294",
  name: "Replace \"g\" with \"0\"",
  description: "Replaces every g with 0.",
  run: (value) => String(value).split("g").join("0"),
});
