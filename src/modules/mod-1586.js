'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1586",
  name: "Replace \"l\" with \"N\"",
  description: "Replaces every l with N.",
  run: (value) => String(value).split("l").join("N"),
});
