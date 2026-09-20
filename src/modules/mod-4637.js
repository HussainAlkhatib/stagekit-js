'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4637",
  name: "Replace \"9\" with \"N\"",
  description: "Replaces every 9 with N.",
  run: (value) => String(value).split("9").join("N"),
});
