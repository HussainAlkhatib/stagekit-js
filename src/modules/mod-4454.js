'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4454",
  name: "Replace \"6\" with \"N\"",
  description: "Replaces every 6 with N.",
  run: (value) => String(value).split("6").join("N"),
});
