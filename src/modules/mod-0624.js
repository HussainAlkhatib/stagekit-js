'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0624",
  name: "Replace \"b\" with \"1\"",
  description: "Replaces every b with 1.",
  run: (value) => String(value).split("b").join("1"),
});
