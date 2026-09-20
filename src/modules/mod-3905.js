'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3905",
  name: "Replace \"X\" with \"N\"",
  description: "Replaces every X with N.",
  run: (value) => String(value).split("X").join("N"),
});
