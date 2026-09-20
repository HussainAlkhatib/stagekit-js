'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3033",
  name: "Replace \"J\" with \"v\"",
  description: "Replaces every J with v.",
  run: (value) => String(value).split("J").join("v"),
});
