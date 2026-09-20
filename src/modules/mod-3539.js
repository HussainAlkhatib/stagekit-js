'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3539",
  name: "Replace \"R\" with \"N\"",
  description: "Replaces every R with N.",
  run: (value) => String(value).split("R").join("N"),
});
