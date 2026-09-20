'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3553",
  name: "Replace \"R\" with \"2\"",
  description: "Replaces every R with 2.",
  run: (value) => String(value).split("R").join("2"),
});
