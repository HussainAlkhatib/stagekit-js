'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3338",
  name: "Replace \"O\" with \"v\"",
  description: "Replaces every O with v.",
  run: (value) => String(value).split("O").join("v"),
});
