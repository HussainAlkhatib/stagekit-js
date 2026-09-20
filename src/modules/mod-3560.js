'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3560",
  name: "Replace \"R\" with \"9\"",
  description: "Replaces every R with 9.",
  run: (value) => String(value).split("R").join("9"),
});
