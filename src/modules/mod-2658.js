'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2658",
  name: "Replace \"D\" with \"m\"",
  description: "Replaces every D with m.",
  run: (value) => String(value).split("D").join("m"),
});
