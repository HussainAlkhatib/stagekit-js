'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2301",
  name: "Replace \"x\" with \"v\"",
  description: "Replaces every x with v.",
  run: (value) => String(value).split("x").join("v"),
});
