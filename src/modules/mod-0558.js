'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0558",
  name: "Replace \"b\" with \"F\"",
  description: "Replaces every b with F.",
  run: (value) => String(value).split("b").join("F"),
});
