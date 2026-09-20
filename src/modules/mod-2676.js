'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2676",
  name: "Replace \"D\" with \"F\"",
  description: "Replaces every D with F.",
  run: (value) => String(value).split("D").join("F"),
});
