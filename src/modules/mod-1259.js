'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1259",
  name: "Replace \"g\" with \"r\"",
  description: "Replaces every g with r.",
  run: (value) => String(value).split("g").join("r"),
});
