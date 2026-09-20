'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2569",
  name: "Replace \"B\" with \"U\"",
  description: "Replaces every B with U.",
  run: (value) => String(value).split("B").join("U"),
});
