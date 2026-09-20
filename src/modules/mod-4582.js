'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4582",
  name: "Replace \"8\" with \"T\"",
  description: "Replaces every 8 with T.",
  run: (value) => String(value).split("8").join("T"),
});
