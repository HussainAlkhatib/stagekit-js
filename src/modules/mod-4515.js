'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4515",
  name: "Replace \"7\" with \"N\"",
  description: "Replaces every 7 with N.",
  run: (value) => String(value).split("7").join("N"),
});
