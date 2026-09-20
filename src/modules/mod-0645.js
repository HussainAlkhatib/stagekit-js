'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0645",
  name: "Replace \"b\" with \"8\"",
  description: "Replaces every b with 8.",
  run: (value) => String(value).split("b").join("8"),
});
