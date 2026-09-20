'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2630",
  name: "Replace \"C\" with \"U\"",
  description: "Replaces every C with U.",
  run: (value) => String(value).split("C").join("U"),
});
