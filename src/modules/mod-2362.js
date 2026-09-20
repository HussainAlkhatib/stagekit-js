'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2362",
  name: "Replace \"y\" with \"v\"",
  description: "Replaces every y with v.",
  run: (value) => String(value).split("y").join("v"),
});
