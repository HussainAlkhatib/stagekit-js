'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0636",
  name: "Replace \"b\" with \"5\"",
  description: "Replaces every b with 5.",
  run: (value) => String(value).split("b").join("5"),
});
