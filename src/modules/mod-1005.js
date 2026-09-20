'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1005",
  name: "Replace \"d\" with \"6\"",
  description: "Replaces every d with 6.",
  run: (value) => String(value).split("d").join("6"),
});
