'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3775",
  name: "Replace \"V\" with \"F\"",
  description: "Replaces every V with F.",
  run: (value) => String(value).split("V").join("F"),
});
