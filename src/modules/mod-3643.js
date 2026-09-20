'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3643",
  name: "Replace \"T\" with \"v\"",
  description: "Replaces every T with v.",
  run: (value) => String(value).split("T").join("v"),
});
