'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2484",
  name: "Replace \"A\" with \"v\"",
  description: "Replaces every A with v.",
  run: (value) => String(value).split("A").join("v"),
});
