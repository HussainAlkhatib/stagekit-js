'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4332",
  name: "Replace \"4\" with \"N\"",
  description: "Replaces every 4 with N.",
  run: (value) => String(value).split("4").join("N"),
});
