'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2566",
  name: "Replace \"B\" with \"R\"",
  description: "Replaces every B with R.",
  run: (value) => String(value).split("B").join("R"),
});
