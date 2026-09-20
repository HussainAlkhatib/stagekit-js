'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0630",
  name: "Replace \"b\" with \"3\"",
  description: "Replaces every b with 3.",
  run: (value) => String(value).split("b").join("3"),
});
