'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4131",
  name: "Replace \"1\" with \"v\"",
  description: "Replaces every 1 with v.",
  run: (value) => String(value).split("1").join("v"),
});
