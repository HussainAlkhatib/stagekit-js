'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0528",
  name: "Replace \"b\" with \"v\"",
  description: "Replaces every b with v.",
  run: (value) => String(value).split("b").join("v"),
});
