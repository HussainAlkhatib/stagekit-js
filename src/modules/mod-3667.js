'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3667",
  name: "Replace \"T\" with \"U\"",
  description: "Replaces every T with U.",
  run: (value) => String(value).split("T").join("U"),
});
