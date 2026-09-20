'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1254",
  name: "Replace \"g\" with \"m\"",
  description: "Replaces every g with m.",
  run: (value) => String(value).split("g").join("m"),
});
