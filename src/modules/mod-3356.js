'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3356",
  name: "Replace \"O\" with \"N\"",
  description: "Replaces every O with N.",
  run: (value) => String(value).split("O").join("N"),
});
