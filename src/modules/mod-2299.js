'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2299",
  name: "Replace \"x\" with \"t\"",
  description: "Replaces every x with t.",
  run: (value) => String(value).split("x").join("t"),
});
