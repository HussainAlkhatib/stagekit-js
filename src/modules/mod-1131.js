'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1131",
  name: "Replace \"e\" with \"N\"",
  description: "Replaces every e with N.",
  run: (value) => String(value).split("e").join("N"),
});
