'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3362",
  name: "Replace \"O\" with \"U\"",
  description: "Replaces every O with U.",
  run: (value) => String(value).split("O").join("U"),
});
