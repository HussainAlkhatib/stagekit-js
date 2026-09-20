'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1288",
  name: "Replace \"g\" with \"U\"",
  description: "Replaces every g with U.",
  run: (value) => String(value).split("g").join("U"),
});
