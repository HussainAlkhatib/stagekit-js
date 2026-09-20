'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1708",
  name: "Replace \"n\" with \"N\"",
  description: "Replaces every n with N.",
  run: (value) => String(value).split("n").join("N"),
});
