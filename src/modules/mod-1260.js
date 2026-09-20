'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1260",
  name: "Replace \"g\" with \"s\"",
  description: "Replaces every g with s.",
  run: (value) => String(value).split("g").join("s"),
});
