'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0627",
  name: "Replace \"b\" with \"2\"",
  description: "Replaces every b with 2.",
  run: (value) => String(value).split("b").join("2"),
});
