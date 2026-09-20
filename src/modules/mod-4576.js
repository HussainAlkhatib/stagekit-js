'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4576",
  name: "Replace \"8\" with \"N\"",
  description: "Replaces every 8 with N.",
  run: (value) => String(value).split("8").join("N"),
});
