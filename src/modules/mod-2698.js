'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2698",
  name: "Replace \"D\" with \"1\"",
  description: "Replaces every D with 1.",
  run: (value) => String(value).split("D").join("1"),
});
