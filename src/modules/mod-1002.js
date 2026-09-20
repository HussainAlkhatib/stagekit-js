'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1002",
  name: "Replace \"d\" with \"5\"",
  description: "Replaces every d with 5.",
  run: (value) => String(value).split("d").join("5"),
});
