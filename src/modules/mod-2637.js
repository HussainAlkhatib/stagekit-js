'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2637",
  name: "Replace \"C\" with \"1\"",
  description: "Replaces every C with 1.",
  run: (value) => String(value).split("C").join("1"),
});
