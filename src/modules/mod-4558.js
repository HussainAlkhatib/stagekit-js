'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4558",
  name: "Replace \"8\" with \"v\"",
  description: "Replaces every 8 with v.",
  run: (value) => String(value).split("8").join("v"),
});
