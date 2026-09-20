'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1995",
  name: "Replace \"s\" with \"v\"",
  description: "Replaces every s with v.",
  run: (value) => String(value).split("s").join("v"),
});
