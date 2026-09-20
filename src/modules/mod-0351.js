'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0351",
  name: "Replace \"a\" with \"N\"",
  description: "Replaces every a with N.",
  run: (value) => String(value).split("a").join("N"),
});
