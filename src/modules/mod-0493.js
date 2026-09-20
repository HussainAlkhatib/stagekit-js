'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0493",
  name: "Replace \"b\" with \"m\"",
  description: "Replaces every b with m.",
  run: (value) => String(value).split("b").join("m"),
});
