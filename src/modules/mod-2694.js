'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2694",
  name: "Replace \"D\" with \"X\"",
  description: "Replaces every D with X.",
  run: (value) => String(value).split("D").join("X"),
});
