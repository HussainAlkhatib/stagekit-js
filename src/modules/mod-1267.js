'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1267",
  name: "Replace \"g\" with \"z\"",
  description: "Replaces every g with z.",
  run: (value) => String(value).split("g").join("z"),
});
