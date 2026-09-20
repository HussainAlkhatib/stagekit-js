'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2655",
  name: "Replace \"D\" with \"j\"",
  description: "Replaces every D with j.",
  run: (value) => String(value).split("D").join("j"),
});
