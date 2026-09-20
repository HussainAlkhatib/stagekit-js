'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0594",
  name: "Replace \"b\" with \"R\"",
  description: "Replaces every b with R.",
  run: (value) => String(value).split("b").join("R"),
});
