'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0648",
  name: "Replace \"b\" with \"9\"",
  description: "Replaces every b with 9.",
  run: (value) => String(value).split("b").join("9"),
});
