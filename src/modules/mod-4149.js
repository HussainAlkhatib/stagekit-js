'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4149",
  name: "Replace \"1\" with \"N\"",
  description: "Replaces every 1 with N.",
  run: (value) => String(value).split("1").join("N"),
});
