'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0576",
  name: "Replace \"b\" with \"L\"",
  description: "Replaces every b with L.",
  run: (value) => String(value).split("b").join("L"),
});
