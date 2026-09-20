'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3783",
  name: "Replace \"V\" with \"N\"",
  description: "Replaces every V with N.",
  run: (value) => String(value).split("V").join("N"),
});
