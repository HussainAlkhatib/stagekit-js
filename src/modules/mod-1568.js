'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1568",
  name: "Replace \"l\" with \"v\"",
  description: "Replaces every l with v.",
  run: (value) => String(value).split("l").join("v"),
});
