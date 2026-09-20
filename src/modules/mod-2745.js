'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2745",
  name: "Replace \"E\" with \"N\"",
  description: "Replaces every E with N.",
  run: (value) => String(value).split("E").join("N"),
});
