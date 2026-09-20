'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0603",
  name: "Replace \"b\" with \"U\"",
  description: "Replaces every b with U.",
  run: (value) => String(value).split("b").join("U"),
});
