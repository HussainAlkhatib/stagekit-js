'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3531",
  name: "Replace \"R\" with \"F\"",
  description: "Replaces every R with F.",
  run: (value) => String(value).split("R").join("F"),
});
