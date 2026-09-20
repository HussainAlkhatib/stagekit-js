'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1264",
  name: "Replace \"g\" with \"w\"",
  description: "Replaces every g with w.",
  run: (value) => String(value).split("g").join("w"),
});
