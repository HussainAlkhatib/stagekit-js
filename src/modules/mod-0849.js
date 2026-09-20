'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0849",
  name: "Replace \"d\" with \"g\"",
  description: "Replaces every d with g.",
  run: (value) => String(value).split("d").join("g"),
});
