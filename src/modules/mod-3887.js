'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3887",
  name: "Replace \"X\" with \"v\"",
  description: "Replaces every X with v.",
  run: (value) => String(value).split("X").join("v"),
});
