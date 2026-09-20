'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3582",
  name: "Replace \"S\" with \"v\"",
  description: "Replaces every S with v.",
  run: (value) => String(value).split("S").join("v"),
});
