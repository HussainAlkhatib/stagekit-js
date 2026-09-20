'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2667",
  name: "Replace \"D\" with \"v\"",
  description: "Replaces every D with v.",
  run: (value) => String(value).split("D").join("v"),
});
