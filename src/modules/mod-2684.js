'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2684",
  name: "Replace \"D\" with \"N\"",
  description: "Replaces every D with N.",
  run: (value) => String(value).split("D").join("N"),
});
