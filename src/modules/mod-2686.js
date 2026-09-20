'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2686",
  name: "Replace \"D\" with \"P\"",
  description: "Replaces every D with P.",
  run: (value) => String(value).split("D").join("P"),
});
