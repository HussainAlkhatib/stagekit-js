'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3681",
  name: "Replace \"T\" with \"8\"",
  description: "Replaces every T with 8.",
  run: (value) => String(value).split("T").join("8"),
});
