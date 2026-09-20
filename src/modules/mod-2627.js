'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2627",
  name: "Replace \"C\" with \"R\"",
  description: "Replaces every C with R.",
  run: (value) => String(value).split("C").join("R"),
});
