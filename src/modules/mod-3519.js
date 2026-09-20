'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3519",
  name: "Replace \"R\" with \"t\"",
  description: "Replaces every R with t.",
  run: (value) => String(value).split("R").join("t"),
});
