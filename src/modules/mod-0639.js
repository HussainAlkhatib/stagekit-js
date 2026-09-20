'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0639",
  name: "Replace \"b\" with \"6\"",
  description: "Replaces every b with 6.",
  run: (value) => String(value).split("b").join("6"),
});
