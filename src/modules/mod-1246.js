'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1246",
  name: "Replace \"g\" with \"d\"",
  description: "Replaces every g with d.",
  run: (value) => String(value).split("g").join("d"),
});
