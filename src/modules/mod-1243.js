'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1243",
  name: "Replace \"g\" with \"a\"",
  description: "Replaces every g with a.",
  run: (value) => String(value).split("g").join("a"),
});
