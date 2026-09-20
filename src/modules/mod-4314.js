'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4314",
  name: "Replace \"4\" with \"v\"",
  description: "Replaces every 4 with v.",
  run: (value) => String(value).split("4").join("v"),
});
