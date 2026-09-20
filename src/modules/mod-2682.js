'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2682",
  name: "Replace \"D\" with \"L\"",
  description: "Replaces every D with L.",
  run: (value) => String(value).split("D").join("L"),
});
