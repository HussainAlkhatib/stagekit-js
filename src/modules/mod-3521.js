'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3521",
  name: "Replace \"R\" with \"v\"",
  description: "Replaces every R with v.",
  run: (value) => String(value).split("R").join("v"),
});
