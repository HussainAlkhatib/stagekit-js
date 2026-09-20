'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3336",
  name: "Replace \"O\" with \"t\"",
  description: "Replaces every O with t.",
  run: (value) => String(value).split("O").join("t"),
});
