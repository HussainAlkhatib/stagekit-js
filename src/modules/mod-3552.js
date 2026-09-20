'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3552",
  name: "Replace \"R\" with \"1\"",
  description: "Replaces every R with 1.",
  run: (value) => String(value).split("R").join("1"),
});
