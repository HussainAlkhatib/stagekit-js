'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2310",
  name: "Replace \"x\" with \"F\"",
  description: "Replaces every x with F.",
  run: (value) => String(value).split("x").join("F"),
});
