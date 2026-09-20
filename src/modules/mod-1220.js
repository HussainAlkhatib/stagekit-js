'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1220",
  name: "Replace \"f\" with \"N\"",
  description: "Replaces every f with N.",
  run: (value) => String(value).split("f").join("N"),
});
