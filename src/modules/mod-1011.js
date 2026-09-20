'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1011",
  name: "Replace \"d\" with \"8\"",
  description: "Replaces every d with 8.",
  run: (value) => String(value).split("d").join("8"),
});
