'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2706",
  name: "Replace \"D\" with \"9\"",
  description: "Replaces every D with 9.",
  run: (value) => String(value).split("D").join("9"),
});
